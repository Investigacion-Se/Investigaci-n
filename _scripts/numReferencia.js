function generarNumReferencia(dv) {
    let referencias = dv.pages('"_referencias"');
}

function obtenerNumRerefencia(titulo) {
    return int(titulo.split("-")[0].trim());
}

module.exports = { generarNumReferencia, obtenerNumRerefencia };