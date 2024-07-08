async function citarWiki(tp) {
    let tR = "";  

    tR += await tp.user.preguntarSimple(
        tp, 
        "nombreArticulo",
        "Nombre del artículo:",
        "No se ingresa nombre del artículo"
    )

    tR += await tp.user.preguntarFecha(
        tp, 
        "fecha",
        "Fecha del artículo:", 
        "No se ingresó un formato de fecha válido", 
        "No se ingresó la fecha del video"
    )

    tR += await tp.user.preguntarSimple(
        tp, 
        "url",
        "Ingresar el url del artículo:",
        "No se ingresó el url del artículo"
    )

    return tR;
}

module.exports = citarWiki;