## Carpetas
---
Lista de todas las carpetas siendo investigadas, con todos los links que usan. Cualquier cosa ver el [[README|read me]].

```dataviewjs
const indices = dv.pages('#Índice');
const referencias = dv.pages('"_referencias"');

let citaView = require(app.vault.adapter.basePath + "/_dataviewScripts/citaView.js");

for (let indice of indices) {
	let paginas = dv.pages(`"${indice.file.folder}" and -#Índice`)
        .filter(pagina => pagina.tema && pagina.referencias)
        .filter(pagina => pagina.tema == indice.tema);

	let referenciasTema = paginas
        .flatMap(pagina => pagina.referencias)
        .map(ref => parseInt(ref, 10))
        .sort(ref => ref)
        .values;

	if (referenciasTema.length == 0)
		continue;

	dv.header(5, `${indice.tema} [[${indice.file.path}|?]]`);
	dv.el("hr", "");

	let archivoReferencias = referencias
        .filter(ref => referenciasTema.indexOf(ref.numReferencia) >= 0);

	let resultado = "";
    for (let referencia of archivoReferencias) {
        resultado += citaView.mostrarCita(referencia);
    }

	dv.el("div", resultado);
}
```
