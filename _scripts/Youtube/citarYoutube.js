async function citarYoutube(tp) {
    let tR = "";  

    tR += await tp.user.preguntarSimple(
        "nombreVideo",
        "Nombre del video:",
        "No se ingresa nombre del video"
    )

    tR += await tp.user.preguntarSimple(
        "nombreCanal",
        "Nombre del canal de Youtube:",
        "No se ingresó nombre del canal"
    )

    tR += await tp.user.preguntarFecha(
        "fecha",
        "Fecha del video:", 
        "No se ingresó un formato de fecha válido", 
        "No se ingresó la fecha del video"
    )

    tR += await tp.user.preguntarSimple(
        "url",
        "Ingresar el url del video de Youtube:",
        "No se ingresó el url del video"
    )

    return tR;
}

module.exports = citarYoutube;