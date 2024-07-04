function generarNumReferencia(dv) {
    let referencias = dv.pages('"_referencias"')
        .sort(ref => ref.numReferencia);
    
    let previoNumReferencia = 0;
    for (let referencia of referencias) {
        if (referencia.numReferencia - previoNumReferencia > 1)
            break;
        previoNumReferencia = referencia.numReferencia;
    }

    return nuevoNumReferencia + 1;
}

function obtenerNumRerefencia(titulo) {
    return int(titulo.split("-")[0].trim());
}

module.exports = { generarNumReferencia, obtenerNumRerefencia };