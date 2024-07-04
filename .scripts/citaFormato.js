function citaFormato(tp, tR, archivo) {
    let tipoCita = archivo.tipoCita;

    switch (tipoCita) {
        case "Libro": return tp.user.citaFormatoLibro(tp, tR, archivo);
    }
}


module.exports = { citaFormato };