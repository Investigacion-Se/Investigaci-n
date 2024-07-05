function describirYoutube(tp, archivo) {
    return {
        nombreAutor: archivo.nombreCanal,
        nombreObra: archivo.nombreVideo,
        extra: ""
    };
}

module.exports = describirYoutube;