let citaView = require(app.vault.adapter.basePath + "/_dataviewScripts/citaView.js");

async function mostrarCitaIndice(indice, referencias) {
    let paginas = dv.pages(`"${indice.file.folder}" and -#Índice`)
        .filter(pagina => pagina.tema && pagina.referencias)
        .filter(pagina => pagina.tema == indice.tema);


    const referencia = `<a href="${indice.file.path}">${indice.tema}</a>`;
    let resultado = `<h5> ${indice.tema} ${referencia} </h5><hr>`;

    let referenciasTema = paginas
        .flatMap(pagina => pagina.referencias)
        .map(ref => parseInt(ref, 10))
        .sort(ref => ref)
        .values;

    let archivoReferencias = referencias
        .filter(ref => referenciasTema.indexOf(ref.numReferencia) >= 0);

    for (let referencia of archivoReferencias) {
        resultado += citaView.mostrarCita(referencia);
    }

    return resultado;
}

exports.mostrarCitaIndice = mostrarCitaIndice;