function describirCita(tp, archivo) {
    let tipoCita = archivo.tipoCita;
    let descripcion = undefined;

    switch (tipoCita) {
        case "Libro": description = tp.user.decribirLibro(tp, archivo); break;
    }   

    return (!description) ? undefined : {
        archivo: archivo,
        tipoCita: tipoCita,
        numReferencia: descripcion.numReferencia,
        nombreAutor: descripcion.nombreAutor,
        nombreObra: descripcion.nombreObra,
        extra: descripcion.extra
    }
}

function descripcionTexto(desc) {
    return `[${desc.numReferencia}] ${desc.nombreObra} de ${nombreObra}, ${desc.extra}`;
}

module.exports = { describirCita, descripcionTexto };