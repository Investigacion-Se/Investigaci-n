async function citarWeb(tp) {
    let tR = "";  

    tR += await tp.user.preguntarAutores(
        tp, 
        "nombreAutores",
        "Nombre del autor (no el apellido):",
        "Apellido del autor:",
        "No se ingresa el nombre del autor de forma correcta",
        "No se ingresa el apellido del autor de forma correcta"
    );

    tR += await tp.user.preguntarFecha(
        tp, 
        "fechaPublicacion",
        "Fecha de publicación de la página:", 
        "No se ingresó un formato de fecha válido", 
        "No se ingresó la fecha de publicación de la página"
    );

    tR += await tp.user.preguntarSimple(
        tp, 
        "tituloArticulo",
        "Nombre del artículo:",
        "No se ingresó nombre del articulo"
    );

    tR += await tp.user.preguntarSimple(
        tp, 
        "nombrePagina",
        "Nombre de la página:",
        "No se ingresó nombre de la página"
    );   

    tR += await tp.user.preguntarSimple(
        tp, 
        "url",
        "Ingresar el url del video de Youtube:",
        "No se ingresó el url del video"
    );

    return tR;
}

module.exports = citarWeb;