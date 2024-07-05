async function citarYoutube(tp) {
    let tR = "";

    try {
        let nombreVideo = await tp.system.prompt("Nombre del video: ", null, true);
        tR += `nombreVideo: ${nombreVideo}\n`;
    } catch (_) {
        throw new Error("No se ingresa nombre del video");
    }    

    try {
        let nombreCanal = await tp.system.prompt("Nombre del canal de Youtube: ", null, true);
        tR += `nombreCanal: ${nombreCanal}\n`;
    } catch (_) {
        throw new Error("No se ingresó nombre del canal");
    }

    try {
        let fechaVideoTexto = await tp.system.prompt("Fecha del video: ", null, true);

        let fechaVideo = moment(fechaVideoTexto);

        if (!fechaVideo.isValid()) {
            let formato = await tp.system.prompt(
                `Ingrese el formato para la fecha ${fechaVideoTexto}`,
            )

            fechaVideo = moment(fechaVideoTexto, formato);
            if (!(formato && fechaVideo.isValida())) {
                throw new Error("No se ingresó un formato de fecha válido");
            }
        }

        tR += `fecha: ${fechaVideo.format("YYYY-MM-DD")}\n`;
    } catch (_) {
        throw new Error("No se ingresó la fecha del video de forma correcta");
    }

    try {
        let url = await tp.system.prompt("Ingresar el url del video de Youtube: ", null, true);
        tR += `url: ${url}\n`;
    } catch (_) {
        throw new Error("No se ingresó el url del video");
    }

    return tR;
}

module.exports = citarYoutube;