function describirCita(tp, archivo) {
    let tipoCita = archivo.tipoCita;
    let numReferencia = archivo.numReferencia;
    
    let texto = undefined;
    switch (tipoCita) {
        case "Libro": texto = tp.user.describirLibro(archivo); break;
        case "Youtube": texto = tp.user.describirYoutube(archivo); break;
        case "Web": texto = tp.user.describirWeb(archivo); break;
        case "Wikipedia": texto = tp.user.describirWiki(archivo); break;
    }   

    return (!texto) ? undefined : {
        archivo: archivo,
        tipoCita: tipoCita,
        numReferencia: numReferencia,
        texto: texto,
    }
}

module.exports = describirCita;