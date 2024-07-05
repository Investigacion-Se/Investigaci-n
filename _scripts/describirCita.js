function describirCita(tp, archivo) {
    let tipoCita = archivo.tipoCita;
    let descripcion = undefined;

    switch (tipoCita) {
        case "Libro": description = tp.user.describirLibro(tp, archivo); break;
        case "Youtube": description = tp.user.describirYoutube(tp, archivo); break;
        case "Web": description = tp.user.describirWeb(tp, archivo); break;
    }   

    return (!descripcion) ? undefined : {
        archivo: archivo,
        tipoCita: tipoCita,
        numReferencia: descripcion.numReferencia,
        nombreAutor: descripcion.nombreAutor,
        nombreObra: descripcion.nombreObra,
        extra: descripcion.extra
    }
}

module.exports = describirCita;