async function citarYoutube(tp) {
    let tR = "";  

    tR += await tp.user.preguntar().simple(
        tp, 
        "nombreVideo",
        "Nombre del video:",
        "No se ingresa nombre del video"
    )

    tR += await tp.user.preguntar().simple(
        tp, 
        "nombreCanal",
        "Nombre del canal de Youtube:",
        "No se ingresó nombre del canal"
    )

    tR += await tp.user.preguntar().fecha(
        tp, 
        "fecha",
        "Fecha del video:", 
        "No se ingresó un formato de fecha válido", 
        "No se ingresó la fecha del video"
    )

    tR += await tp.user.preguntar().simple(
        tp, 
        "url",
        "Ingresar el url del video de Youtube:",
        "No se ingresó el url del video"
    )

    return tR;
}

function describirYoutube(archivo) {
    return `${archivo.nombreVideo} de ${archivo.nombreCanal}`;
}

module.exports = () => {
    return { 
        citar: citarYoutube, 
        describir: describirYoutube
    };
}