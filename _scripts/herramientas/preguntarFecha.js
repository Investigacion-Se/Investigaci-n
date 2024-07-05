async function preguntarFecha(tp, key, mensaje, errorFormatoIncorrecto, errorFechaIncorrecta) {
    let tR = "";

    try {
        let fechaVideoTexto = await tp.system.prompt(mensaje, null, true);

        let fechaVideo = moment(fechaVideoTexto);

        if (!fechaVideo.isValid()) {
            let formato = await tp.system.prompt(
                `Ingrese el formato para la fecha ${fechaVideoTexto}`,
            )

            fechaVideo = moment(fechaVideoTexto, formato);
            if (!(formato && fechaVideo.isValida())) {
                throw new Error(errorFormatoIncorrecto);
            }
        }

        tR += `${key}: ${fechaVideo.format("YYYY-MM-DD")}\n`;
    } catch (_) {
        throw new Error(errorFechaIncorrecta);
    }

    return tR;
}

module.exports = preguntarFecha;
