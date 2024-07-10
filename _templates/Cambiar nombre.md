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

        await cambiarNombreCarpeta(indiceBuscado.file.folder, nuevoTema);        
    }

    async function cambiarNombreCarpeta(nombreCarpeta, nuevoNombre) {
        let pathDestino = nombreCarpeta.split("/");
        pathDestino = pathDestino.slice(0, pathDestino.length - 1);
        pathDestino.push(nuevoNombre);
        pathDestino = pathDestino.join("/");

        await app.vault.rename(
            app.vault.getAbstractFileByPath(nombreCarpeta), 
            pathDestino
        );
    }
_%>