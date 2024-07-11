<%*
    const dv = app.plugins.plugins["dataview"].api;

    try {
        await cambiarNombre(dv);
    } catch (e) {
        const mensaje = "Hubo un error en el renombre";
        console.log(e);
        console.log(mensaje);
        new Notice(mensaje);
    }

    async function cambiarNombre(dv) {
        let carpeta = tp.file.folder(true);
        let todosIndices = dv.pages("#Índice");
        let indiceBuscado;
        
        const textoPreguntarModificar = "Cuál es el tema que se quiere renombrar?";
        if (carpeta == "/" || carpeta == "") {
            indiceBuscado = await tp.user.preguntarArchivo(tp, todosIndices, textoPreguntarModificar);
        } else {
            let archivos = dv.pages(`"${carpeta}" and #Índice`)
                .filter(archivo => archivo.tema == tp.frontmatter["tema"]);
            
            switch (archivos.length) {
                case 0: indiceBuscado = await tp.user.preguntarArchivo(tp, todosIndices, textoPreguntarModificar); break;
                case 1: indiceBuscado = archivos[0]; break;
                default: indiceBuscado = await tp.user.preguntarArchivo(tp, archivos, textoPreguntarModificar); break;
            }
        } 

        let temas = todosIndices.map(indice => indice.tema);

        let nuevoTema = await tp.system.prompt("Nuevo nombre de la temática: (Apretar ESC para salir)");
        if (!nuevoTema) 
            return await tp.user.salir(tp, "No se ingresó un tema");

        while (temas.values.indexOf(nuevoTema) >= 0) {
            new Notice("El tema ya existe, por favor elegir otro, o salir");
            
            nuevoTema = await tp.system.prompt("Nuevo nombre de la temática: (Apretar ESC para salir)");
            if (!nuevoTema) 
                return await tp.user.salir(tp, "No se ingresó un tema");
        }



        let archivosModificar = dv.pages(`"${indiceBuscado.file.folder}" and -#Índice`)
            .filter(archivo => archivo.tema == indiceBuscado.tema)
            .map(pagina => tp.file.find_tfile(pagina.file.path));

        let modificaciones = [];
        for (let tArchivo of archivosModificar) {
            let modificacion = app.fileManager.processFrontMatter(tArchivo, (frontmatter) => {
                frontmatter["tema"] = nuevoTema;
                frontmatter["indice"] = nuevoTema;
            });

            modificaciones.push(modificacion);
        }

        await Promise.all(modificaciones);

        await tp.user.cambiarNombreCarpeta(indiceBuscado.file.folder, nuevoTema);        
    }

    async function cambiarSubtemas(indice, nuevoTema) {
        let carpeta = indice.file.folder;
        let carpetaSuperTema = carpeta.split("/");
        carpetaSuperTema = carpetaSuperTema.slice(0, carpetaSuperTema.length - 2).join("/");

        let tFileSuperTema = tp.file.find_tfile(`${carpetaSuperTema}/${indice.superTema}.md`);
        await app.fileManager.processFrontMatter(tFileSuperTema, (frontmatter) => {
            let subtemas = frontmatter["subTemas"];
            let index = subtemas.indexOf(indice.tema);
            if (index < 0) {
                const mensaje = "No se encontró el subtema en el superTema, posiblemente un error";
                console.log(mensaje);
                new Notice(mensaje);
            } else {
                subtemas.splice(index, 1);
                frontmatter["subTemas"] = subtemas;
            }
        });
    }
_%>