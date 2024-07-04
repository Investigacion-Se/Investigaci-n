function generarNumReferencia(dv) {
    
}

function obtenerNumRerefencia(titulo) {
    return int(titulo.split("-")[0].trim());
}

module.exports = { generarNumReferencia, obtenerNumRerefencia };