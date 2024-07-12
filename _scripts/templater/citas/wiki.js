async function citarWiki(tp) {
    let tR = "";  

    tR += await tp.user.preguntar().simple(
        tp, 
        "nombreArticulo",
        "Nombre del artículo:",
        "No se ingresa nombre del artículo"
    )

    tR += await tp.user.preguntar().fecha(
        tp, 
        "fecha",
        "Fecha del artículo:", 
        "No se ingresó un formato de fecha válido", 
        "No se ingresó la fecha del video"
    )

    tR += await tp.user.preguntar().simple(
        tp, 
        "url",
        "Ingresar el enlace permanente del artículo:",
        "No se ingresó el url del artículo"
    )

    return tR;
}

function describirWiki(archivo) {
    return `Artículo de wikipedia: ${archivo.nombreArticulo}`;
}

module.exports = () => {
    return { 
        citar: citarWiki, 
        describir: describirWiki
    };
}