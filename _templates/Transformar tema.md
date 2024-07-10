<%*
    const CREAR_TEMA = 1;
    const dv = app.plugins.plugins["dataview"].api;

    try {
        await transformar(dv);
    } catch (e) {
        const mensaje = "Hubo un error en la transformación";
        console.log(e);
        console.log(mensaje);
        new Notice(mensaje);
    }

    async function transformar(dv) {
        let carpeta = tp.file.folder(true);
        let todosIndices = dv.pages("#Índice");
        let indiceBuscado;
        
        const textoPreguntarModificar = "Cuál es el tema que se quiere transformar?";
        if (carpeta == "/" || carpeta == "") {
            indiceBuscado = await preguntarArchivo(tp, todosIndices, textoPreguntarModificar);
        } else {
            let archivos = dv.pages(`"${carpeta}" and #Índice`)
                .filter(archivo => archivo.tema == tp.frontmatter["tema"]);
            
            switch (archivos.length) {
                case 0: indiceBuscado = await preguntarArchivo(tp, todosIndices, textoPreguntarModificar); break;
                case 1: indiceBuscado = archivos[0]; break;
                default: indiceBuscado = await preguntarArchivo(tp, archivos, textoPreguntarModificar); break;
            }
        }    
    
        // Necesitamos preguntar si va a ser un tema, o va a ser un subtema
        let indicesPosibles = todosIndices.filter(ind => ind.tema != indiceBuscado.tema);
        let texto = "Elegir tema para ser transformado en subtema de este";
        let opciones = [];
        let valores = [];

        if (indiceBuscado.superTema) {
            texto = "Crear como tema o como subtema de los siguientes?";
            opciones.push("Transformar en un tema");
            valores.push(CREAR_TEMA);
        }

        let eleccion = await preguntarArchivo(tp, indicesPosibles,
            texto, opciones, valores
        );

        // Cambiar la carpeta
        let carpetaDestino = (eleccion == CREAR_TEMA) ? "" : eleccion.file.folder;
        await moverACarpeta(dv, indiceBuscado, carpetaDestino);

        if (eleccion == CREAR_TEMA || !indiceBuscado.superTema) {
            // Cambiar subtemas del superTema
            eliminarDeSubtemas(indiceBuscado);
        }

        // Cambiar nivel del tema y subtemas
        let nuevoNivel = (eleccion == CREAR_TEMA) ? 0 : eleccion.nivel + 1;
        await cambiarNivel(dv, indiceBuscado, nuevoNivel);

        if (eleccion != CREAR_TEMA) {
            // Agregar subtema a la elección
            await agregarASubtemas(eleccion, indiceBuscado.tema);
        }

        // Agregar/Cambiar supertema
        let nuevoSuperTema = (eleccion == CREAR_TEMA) ? undefined : eleccion.tema;
        await cambiarSupertema(indiceBuscado, nuevoSuperTema);
    }

    async function moverACarpeta(dv, indice, carpetaDestino) {
        
    }

    async function cambiarNivel(dv, indice, nivel) {
        // Cambiar el nivel del indice y sus subtemas
        let nivelIndice = indice.nivel;
        let paginasModificar = dv.pages(`"${indice.file.folder}" and #Índice`)
            .map(pagina => tp.file.find_tfile(pagina.file.path));

        let modificaciones = [];
        for (let paginaModificar of paginasModificar) {
            let modificacion = app.fileManager.processFrontMatter(paginaModificar, (frontmatter) => {
                frontmatter["nivel"] = nivel + frontmatter["nivel"] - nivelIndice;
            });

            modificaciones.push(modificacion);
        }

        await Promise.all(modificaciones);
    }

    async function cambiarSupertema(indice, nuevoSupertema = undefined) {
        // Cambiar el supertema del indice
        let tFileIndice = tp.file.find_tfile(indice.file.path);
        await app.fileManager.processFrontMatter(tFileIndice, (frontmatter) => {
            frontmatter["superTema"] = nuevoSupertema;
        });
    }

    async function eliminarDeSubtemas(indice) {
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

    async function agregarASubtemas(eleccion, tema) {
        let tFileEleccion = tp.file.find_tfile(eleccion.file.path);
        await app.fileManager.processFrontMatter(tFileEleccion, (frontmatter) => {
            if (!frontmatter["subTemas"]) {
                frontmatter["subTemas"] = [ `${tema}` ];
            } else {
                frontmatter["subTemas"].push( `${tema}` );
            }
        });
    }

    async function preguntarArchivo(tp, indices, texto, otrasOpciones = [], otrosValores = []) {
        let descripcion = tp.user.describirTemas(indices);
    
        return await tp.system.suggester(
            otrasOpciones.concat(descripcion.map(desc => desc.descripcion)),
            otrosValores.concat(descripcion.map(desc => desc.archivo)),
            true, texto
        );
    }
    
_%>