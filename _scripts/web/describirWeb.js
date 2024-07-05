function describirYoutube(tp, archivo) {
    return {
        nombreAutor: archivo.nombreAutores,
        nombreObra: archivo.tituloArticulo,
        extra: `publicado en ${nombrePagina}`
    };
}

module.exports = describirYoutube;