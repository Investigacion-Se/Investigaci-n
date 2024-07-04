function generarNumReferencia(dv) {
    let referencias = dv.pages('"_referencias"')
        .sort(ref => ref.numReferencia);
    
    let previoNumReferencia = 0;
    for (let referencia of referencias) {
        if (referencia.numReferencia - previoNumReferencia > 1)
            break;
        previoNumReferencia = referencia.numReferencia;
    }

    return previoNumReferencia + 1;
}

module.exports = generarNumReferencia;