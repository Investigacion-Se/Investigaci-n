<%*
    const dv = app.plugins.plugins["dataview"].api;
    let path = tp.file.path(true);

    let archivo = {
        dv: dv.pageS(path),
        tp: tp.file.find_tfile(path)
    };

    try {



    } catch (e) {
        const mensaje = "Hubo un error al agregar la referencia";
        console.log(e);
        console.log(mensaje);
        new Notice(mensaje);
    }
_%>