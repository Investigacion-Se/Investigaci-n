<%*
    const SIN_EMPEZAR = "sin-empezar";
    const EMPEZADO = "empezado";
    const AMPLIAR = "ampliar";
    const TERMINADO = "terminado";

    const tArchivo = tp.file.find_tfile(tp.file.path(true));

    try {
        let estadoActual = tp.frontmatter["etapa"];
        let opciones = [ SIN_EMPEZAR, EMPEZADO, AMPLIAR, TERMINADO ]
            .filter(estado => estado !== estadoActual);

        let nuevoEstado = await tp.system.suggester(
            (estado) => `${estado.charAt(0).toUpperCase()}${estado.slice(1)}`.replaceAll("-", " "),
            opciones,
            true, "Cambiar el estado del archivo"
        );

        await app.fileManager.processFrontMatter(tArchivo, (frontmatter) => {
            frontmatter["etapa"] = nuevoEstado;
        });

    } catch (e) {
        console.log(e);
    }
_%>