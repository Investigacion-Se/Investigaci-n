<%*
    const dv = app.plugins.plugins["dataview"].api;
    const AGREGAR_ALIAS = 1;
    const MODIFICAR_ALIAS = 2;
    const ELIMINAR_ALIAS = 3;

    let path = tp.file.path(true);

    let archivo = {
        dv: dv.page(path),
        tp: tp.file.find_tfile(path)
    };

    try {

        if (!archivo.dv.aliases || archivo.dv.aliases < 0) {
            new Notice("No hay alias para modificar");
            throw Error("No hay alias para modificar");
        }

        let aliasActual = archivo.dv.aliases;
        let accion = await tp.system.suggester(
            ["⊕ Agregar alias", ...aliasActual],
            [AGREGAR_ALIAS, ...aliasActual],
            true, "¿Qué desea hacer?", 11
        );

        if (accion == AGREGAR_ALIAS) {
            let nuevoAlias = await preguntarNuevoAlias(aliasActual);

            await app.fileManager.processFrontMatter(archivo.tp, (frontmatter) => {
                if (!frontmatter["aliases"]) {
                    frontmatter["aliases"] = [ `${nuevoAlias}` ];
                } else {
                    frontmatter["aliases"].push(`${nuevoAlias}`);
                }
            });
        } else {
            let viejoAlias = accion;

            accion = await tp.system.suggester(
                ["↶ Modificar alias", "⊖ Eliminar alias"],
                [MODIFICAR_ALIAS, ELIMINAR_ALIAS],
                true, `¿Qué desea hacer con el alias "${viejoAlias}"?`
            );

            switch (accion) {
                case MODIFICAR_ALIAS: 
                    let nuevoAlias = await preguntarNuevoAlias(aliasActual);
                    await app.fileManager.processFrontMatter(archivo.tp, (frontmatter) => {
                        frontmatter["aliases"].push(`${nuevoAlias}`);
                    });

                case ELIMINAR_ALIAS: 
                    await app.fileManager.processFrontMatter(archivo.tp, (frontmatter) => {
                        let index = frontmatter["aliases"].indexOf(viejoAlias);
                        frontmatter["aliases"].splice(index, 1);
                    });
            }
        }

    } catch (e) {
        const mensaje = "Hubo un error al modificar alias";
        console.log(e);
        console.log(mensaje);
        new Notice(mensaje);
    }

    async function preguntarNuevoAlias(aliasActual) {
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

        return nuevoAlias;
    }
_%>