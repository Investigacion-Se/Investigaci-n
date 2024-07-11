<%*
    const dv = app.plugins.plugins["dataview"].api;
    const AGREGAR_ALIAS = 1;

    let path = tp.file.path(true);

    let archivo = {
        dv: dv.page(path),
        tp: tp.file.find_tfile(path)
    };

    try {

        let aliasActual = archivo.dv.aliases;
        let accion = await tp.system.suggester(
            ["⊕ Agregar alias", ...aliasActual],
            [AGREGAR_ALIAS, ...aliasActual],
            true, "¿Qué desea hacer?", 11
        );

        if (accion == AGREGAR_ALIAS) {
            let nuevoAlias = await tp.system.prompt("Escriba el alias a agregar", null, true);

            let aliasValido = tp.user.validarNombre(nuevoAlias);
            let aliasExiste = aliasActual.indexOf(nuevoAlias) >= 0;

            while (aliasExiste || !aliasValido) {
                const mensaje = !aliasValido ? 'El alias no es válido, no puede contener * " \\ / < > : | ?' : "El alias ya existe";
                new Notice(mensaje);
                
                nuevoAlias = await tp.system.prompt("Escriba el alias a agregar", null, true);

                aliasValido = tp.user.validarNombre(nuevoAlias);
                aliasExiste = aliasActual.indexOf(nuevoAlias) >= 0;
            }

            await app.fileManager.processFrontMatter(archivo.tp, (frontmatter) => {
                if (!frontmatter["aliases"]) {
                    frontmatter["aliases"] = [ `${nuevoAlias}` ];
                } else {
                    frontmatter["aliases"].push(`${nuevoAlias}`);
                }
            });
        } else {
            console.log(accion);
        }


    } catch (e) {
        const mensaje = "Hubo un error al agregar la referencia";
        console.log(e);
        console.log(mensaje);
        new Notice(mensaje);
    }
_%>