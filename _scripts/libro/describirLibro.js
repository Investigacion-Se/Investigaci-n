function describirLibro(tp, archivo) {
    return {
        numReferencia: archivo.numReferencia,
        nombreAutor: "Nombre del autor",
        nombreObra: "Nombre de la obra",
        extra: "Más datos"
    };
}

module.exports = describirLibro;