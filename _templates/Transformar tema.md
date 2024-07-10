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

        if (eleccion == CREAR_TEMA) {
            // Conseguir supertema y sacarle indiceBuscado de subtemas
            // Mover carpeta al root

            // Cambiar nivel del tema a 0, y subtemas a sus niveles correspondientes
            await cambiarNivel(dv, indiceBuscado, 0);
            // Eliminar supertema
            await cambiarSupertema(indiceBuscado);

        } else if (indiceBuscado.superTema) {
            // Era un tema

            // Mover carpeta al lugar correcto
            // Cambiar nivel del tema y subtemas
            await cambiarNivel(dv, indiceBuscado, eleccion.nivel + 1);
            // Agregar supertema
            await cambiarSupertema(indiceBuscado, eleccion.tema);
        } else {
            // Era un subtema

            // Mover carpeta al lugar correcto
            // Cambiar nivel del tema y subtemas
            await cambiarNivel(dv, indiceBuscado, eleccion.nivel + 1);
            // Cambiar supertema
            await cambiarSupertema(indiceBuscado, eleccion.tema);
        }
    }

    async function cambiarNivel(dv, indice, nivel) {
        // Cambiar el nivel del indice y sus subtemas
        let nivelIndice = indice.nivel;
        let paginasModificar = dv.pages(`"${indice.file.folder}" and #Índice`)
            .map(pagina => tp.file.find_tfile(pagina.file.path));

        let 
        for (let paginaModificar of paginasModificar) {
             app.fileManager.processFrontMatter(paginaModificar, (frontmatter) => {
                frontmatter["nivel"] = frontmatter["nivel"] - nivelIndice + nivel;
            });
        }

        await app.fileManager.processFrontMatter(tArchivo, (frontmatter) => {
            if (!frontmatter["referencias"]) {
                frontmatter["referencias"] = [ `${numReferencia}` ];
            } else {
                frontmatter["referencias"].push(`${numReferencia}`);
            }
        })
    }

    async function cambiarSupertema(indice, nuevoSupertema = undefined) {
        // Cambiar el supertema del indice
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