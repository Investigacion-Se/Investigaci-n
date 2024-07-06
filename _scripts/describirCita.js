function describirCita(tp, archivo) {
    let tipoCita = archivo.tipoCita;
    let numReferencia = archivo.numReferencia;
    
    let descripcion = undefined;
    switch (tipoCita) {
        case "Libro": descripcion = tp.user.describirLibro(tp, archivo); break;
        case "Youtube": descripcion = tp.user.describirYoutube(tp, archivo); break;
        case "Web": descripcion = tp.user.describirWeb(tp, archivo); break;
    }   

    return (!descripcion) ? undefined : {
        archivo: archivo,
        tipoCita: tipoCita,
        numReferencia: numReferencia,
        nombreAutor: descripcion.nombreAutor,
        nombreObra: descripcion.nombreObra,
        extra: descripcion.extra
    }
}

module.exports = describirCita;