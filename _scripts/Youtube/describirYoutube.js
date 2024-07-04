function describirYoutube(tp, archivo) {
    return {
        numReferencia: archivo.numReferencia,
        nombreAutor: archivo.nombreCanal,
        nombreObra: archivo.nombreVideo,
        extra: ""
    };
}

module.exports = { describirYoutube };