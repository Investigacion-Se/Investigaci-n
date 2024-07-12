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
    let nuevoTema = await preguntarNombreTema(dv, indiceBuscado);

    // Cambiar nombre del indice
    let pathNuevoIndice = `${indiceBuscado.file.folder}/${nuevoTema}.md`;
    let tIndice = tp.file.find_tfile(indiceBuscado.file.path);
    await app.vault.rename(tIndice, pathNuevoIndice);
    await app.fileManager.processFrontMatter(tIndice, (frontmatter) => {
        frontmatter["tema"] = nuevoTema;
    });
    pathNuevoIndice = indiceBuscado.file.folder.split("/");
    pathNuevoIndice.pop();
    pathNuevoIndice.push(nuevoTema);
    pathNuevoIndice.push(`${nuevoTema}.md`);
    pathNuevoIndice = pathNuevoIndice.join("/");

    // Cambiar los subtemas del supertema
    if (indiceBuscado.superTema) {
        
        let carpetaSuperTema = carpeta.split("/");
        carpetaSuperTema = carpetaSuperTema.slice(0, carpetaSuperTema.length - 2).join("/");
        let tFileSuperTema = tp.file.find_tfile(`${carpetaSuperTema}/${indiceBuscado.superTema}.md`);

        await app.fileManager.processFrontMatter(tFileSuperTema, (frontmatter) => {
            let subtemas = frontmatter["subTemas"];
            let index = subtemas.indexOf(indiceBuscado.tema);
            if (index < 0) {
                const mensaje = "No se encontró el subtema en el superTema, posiblemente un error";
                console.log(mensaje);
                new Notice(mensaje);
            } else {
                subtemas.splice(index, 1);
                subtemas.push(nuevoTema);
                frontmatter["subTemas"] = subtemas;
            }
        });        
    }

    // Cambiar los supertemas de los subtemas
    let subtemas = indiceBuscado.subTemas;
    if (subtemas && subtemas.length > 0) {
        
        let indicesSubtemas = dv.pages(`"${indiceBuscado.file.folder}" and #Índice`)
            .filter(indice => subtemas.indexOf(indice.tema) >= 0)
            .map(pagina => tp.file.find_tfile(pagina.file.path));

        modificaciones = [];
        for (let tArchivo of indicesSubtemas) {
            let modificacion = app.fileManager.processFrontMatter(tArchivo, (frontmatter) => {
                frontmatter["superTema"] = nuevoTema;
            });

            modificaciones.push(modificacion);
        }
        await Promise.all(modificaciones);
    }

    // Cambiar los temas de los archivos
    let archivosModificar = dv.pages(`"${indiceBuscado.file.folder}" and -#Índice`)
        .filter(archivo => archivo.tema == indiceBuscado.tema)
        .map(pagina => tp.file.find_tfile(pagina.file.path));

    modificaciones = [];
    for (let tArchivo of archivosModificar) {
        let modificacion = app.fileManager.processFrontMatter(tArchivo, (frontmatter) => {
            frontmatter["tema"] = nuevoTema;
            frontmatter["indice"] = `[[${pathNuevoIndice}|${nuevoTema}]]`;
        });

        modificaciones.push(modificacion);
    }
    await Promise.all(modificaciones);

    // Cambiar nombre de la carpeta
    await tp.user.cambiarNombreCarpeta(indiceBuscado.file.folder, nuevoTema);        
}

async function preguntarNombreTema(dv, indiceActual) {
    let temasPrincipales = dv.pages("#Índice").filter(indice => !indice.superTema)
        .map(indice => indice.tema);
    console.log(temasPrincipales);
    let temasActual = dv.pages(`"${indiceActual.file.folder}" and #Índice`)
        .map(indice => indice.tema);

    let nuevoTema = await tp.system.prompt("Nuevo nombre de la temática: (Apretar ESC para salir)");
    if (!nuevoTema) 
        return await tp.user.salir(tp, "No se ingresó un tema");

    let esUnicoTema = temasPrincipales.values.indexOf(nuevoTema) < 0 && temasActual.indexOf(nuevoTema) < 0;
    let esValido = tp.user.validarNombre(nuevoTema);

    while (!(esUnicoTema && esValido)) {
        const mensaje = !esValido ? 'No es un nombre válido, no puede contener * " \\ / < > : | ?' : "El tema ya existe";
        new Notice(mensaje);
        
        nuevoTema = await tp.system.prompt("Nuevo nombre de la temática: (Apretar ESC para salir)");
        if (!nuevoTema) 
            return await tp.user.salir(tp, "No se ingresó un tema");

        esUnicoTema = temasPrincipales.values.indexOf(nuevoTema) < 0 && temasActual.indexOf(nuevoTema) < 0;
        esValido = tp.user.validarNombre(nuevoTema);
    }

    return nuevoTema;
}
