function generarNumReferencia(dv) {
    let referencias = dv.pages('"_referencias"')
        .sort(ref => ref.numReferencia);
    
    let previoNumReferencia = 0;
    for (let referencia of referencias) {
        numReferenciaActual = parseInt(referencia.numReferencia, 10);

        if (numReferenciaActual - previoNumReferencia > 1)
            break;
        previoNumReferencia = numReferenciaActual;
    }

    return previoNumReferencia + 1;
}

module.exports = generarNumReferencia;