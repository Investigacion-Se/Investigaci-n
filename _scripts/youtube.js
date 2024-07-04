async function citarYoutube(tp, tR) {
    try {
        let nombreVideo = await tp.system.propmt(
            "Nombre del video: ", "Nombre indefinido", true
        );
        tR += `nombreVideo: ${nombreVideo}\n`;
    } catch (_) {
        throw new TypeError("No se ingresa nombre del video");
    }

    try {
        let nombreCanal = await tp.system.propmt(
            "Nombre del canal de Youtube: ", "Nombre indefinido", true
        );
        tR += `nombreCanal: ${nombreCanal}\n`;
    } catch (_) {
        throw new TypeError("No se ingresó nombre del video");
    }

    

}

function describirYoutube(tp, archivo) {
    return {
        numReferencia: archivo.numReferencia,
        nombreAutor: archivo.nombreCanal,
        nombreObra: archivo.nombreVideo,
        extra: ""
    };
}

module.exports = { citarYoutube, describirYoutube };