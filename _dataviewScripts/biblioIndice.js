const citaView = require(app.vault.adapter.basePath + "/_dataviewScripts/citaView.js");

const { indice } = input

let paginas = dv.pages(`"${indice.file.folder}" and -#Índice`)
    .filter(pagina => pagina.tema && pagina.referencias)
    .filter(pagina => pagina.tema == indice.tema);

let referenciasTema = paginas
    .flatMap(pagina => pagina.referencias)
    .map(ref => parseInt(ref, 10))
    .sort(ref => ref)
    .values;

if (referenciasTema.length > 0) {
    let archivoReferencias = dv.pages('"_referencias"')
        .filter(ref => referenciasTema.indexOf(ref.numReferencia) >= 0)
        .sort(ref => ref.numReferencia);

    let resultado = "";
    for (let referencia of archivoReferencias) {
        resultado += citaView.mostrarCita(referencia);
    }

    dv.el("div", resultado);
} else {
    dv.el("p", "No hay referencias para este tema");
}