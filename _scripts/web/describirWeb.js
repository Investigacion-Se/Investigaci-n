function describirWeb(archivo) {
    let autores = "";
    for (let {autore: autore} of archivo.nombreAutores) {
        let [{nombre: nombre}, {apellido: apellido}] = autore;
        autores += `${apellido}, ${nombre[0]}.`;
    }

    return `${archivo.tituloArticulo} de ${autores}, publicado en ${archivo.nombrePagina}`;
}

module.exports = describirWeb;