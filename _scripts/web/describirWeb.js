function describirWeb(tp, archivo) {
    let autores = "";
    for (let {autore: autore} of archivo.nombreAutores) {
        let [{nombre: nombre}, {apellido: apellido}] = autore;
        autores += `${apellido}, ${nombre[0]}.`;
    }

    return {
        nombreAutor: autores,
        nombreObra: archivo.tituloArticulo,
        extra: `publicado en ${archivo.nombrePagina}`
    };
}

module.exports = describirWeb;