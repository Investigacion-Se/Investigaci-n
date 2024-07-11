<%*

    // Queriendo generar lo siguiente
    // <sup><a href="#ref-54" style="color: inherit; text-decoration: none;">[54]</a></sup>

    const dv = app.plugins.plugins["dataview"].api;
    let path = tp.file.path(true);

    let archivo = dv.page(path);
    if (archivo.referencias && archivo.referencias.length > 0) {
        let referenciasActuales = archivo.referencias.map(ref => parseInt(ref, 10));

        try {

            let referencias = dv.pages('"_referencias"')
                .filter(ref => referenciasActuales.indexOf(ref.numReferencia) >= 0)
                .flatMap(referencia => {
                    let desc = tp.user.describirCita(tp, referencia);
                    if (!desc) {
                        console.log("El siguiente archivo tuvo un erro al describirse");
                        console.log(referencia);
                        return [];
                    }
                    return [ desc ];
                })
                .sort(ref => parseInt(ref.numReferencia, 10));
            
            let cita = await tp.system.suggester(
                referencias.map(ref => tp.user.descripcionTexto(ref)), 
                referencias.map(ref => ref.numReferencia),
                true, "Referenciar cita (si no hay nada que referenciar, apretar ESC)", 10
            );

            tR += `<sup><a href="#ref-${cita}" style="color: inherit; text-decoration: none;">[${cita}]</a></sup> `;

        } catch (e) {
            const mensaje = "Hubo un error al agregar la referencia";
            console.log(e);
            console.log(mensaje);
            new Notice(mensaje);
        }
    } else {
        const mensaje = "No hay referencias para citar";
        console.log(mensaje);
        new Notice(mensaje);
    }    

_%>