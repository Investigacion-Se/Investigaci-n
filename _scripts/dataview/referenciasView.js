const citaView = require(app.vault.adapter.basePath + "/_scripts/dataview/citaView.js");

const { archivo } = input;

let referenciasArchivo = archivo.referencias;
if (!referenciasArchivo)
	referenciasArchivo = [];

referenciasArchivo = referenciasArchivo.map(ref => parseInt(ref, 10));

let referencias = dv.pages('"_referencias"')
	.filter(ref => referenciasArchivo.indexOf(ref.numReferencia) >= 0);

for (let referencia of referencias) {
    dv.el("p", citaView.mostrarCita(referencia));
}