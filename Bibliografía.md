## Carpetas
---
Lista de todas las carpetas siendo investigadas, con todos los links que usan. Cualquier cosa ver el [[README|read me]].


```dataviewjs
const indices = dv.pages('#Índice')
	.;
const referencias = dv.pages('"_referencias"');

let citaIndiceView = require(app.vault.adapter.basePath + "/_dataviewScripts/citaIndiceView.js");

for (let indice of indices) {
	let resultado = await citaIndiceView.mostrarCitaIndice(indice, referencias);
	dv.el("div", resultado);
}
```
