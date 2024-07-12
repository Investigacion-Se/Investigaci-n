async function citarWeb(tp) {
    let tR = "";  

    tR += await tp.user.preguntar().autores(
        tp, 
        "nombreAutores",
        "Nombre del autor (no el apellido):",
        "Apellido del autor:",
        "No se ingresa el nombre del autor de forma correcta",
        "No se ingresa el apellido del autor de forma correcta"
    );

    tR += await tp.user.preguntar().fecha(
        tp, 
        "fechaPublicacion",
        "Fecha de publicación de la página:", 
        "No se ingresó un formato de fecha válido", 
        "No se ingresó la fecha de publicación de la página"
    );

    tR += await tp.user.preguntar().simple(
        tp, 
        "tituloArticulo",
        "Nombre del artículo:",
        "No se ingresó nombre del articulo"
    );

    tR += await tp.user.preguntar().simple(
        tp, 
        "nombrePagina",
        "Nombre de la página:",
        "No se ingresó nombre de la página"
    );   

    tR += await tp.user.preguntar().simple(
        tp, 
        "url",
        "Ingresar el url del artículo:",
        "No se ingresó el url del video"
    );

    return tR;
}

function describirWeb(archivo) {
    let autores = "";
    for (let {autore: autore} of archivo.nombreAutores) {
        let [{nombre: nombre}, {apellido: apellido}] = autore;
        autores += `${apellido}, ${nombre[0]}.`;
    }

    return `${archivo.tituloArticulo} de ${autores}, publicado en ${archivo.nombrePagina}`;
}

module.exports = () => {
    return { 
        citar: citarWeb, 
        describir: describirWeb
    };
}