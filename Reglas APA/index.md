---
dia: 2024-07-03
tags:
  - Índice
tema: Reglas APA
---
### Que se va a investigar
---
Se va a investigar las reglas APA que se va a usar para citar cualquier contenido nuevo hecho en esta página


### Bibliografía
---
```dataviewjs
    await dv.view("_dataviewScripts/biblioIndice", { indice: dv.current() });
```


### Archivos
---
```dataviewjs
const pagina_actual = dv.current();
if (pagina_actual) {
	const nombre_pagina = pagina_actual.file.name;
	const paginas = dv.pages(`"${pagina_actual.file.folder}"`)
		.where(pagina => {
			return pagina.file.name != nombre_pagina;
		});

	let elementos = [];
	for (let pagina of paginas.file) {		
		const path = pagina.path;
		const nombre = pagina.name;

		elementos.push(`[[${path}|${nombre}]]`);
	}
	dv.list(elementos)
}
```
