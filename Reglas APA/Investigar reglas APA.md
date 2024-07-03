---
dia: 2024-07-03
tags: 
 - Índice
---
### Que se va a investigar
---
Se va a investigar las reglas APA que se va a usar para citar cualquier contenido nuevo hecho en esta página


### Bibliografía
---
```dataviewjs
const pagina_actual = dv.current();

let carpeta = '"Reglas APA"';

if (pagina_actual) {
	const nombre_pagina = pagina_actual.file.name;
	const paginas = dv.pages(carpeta)
		.where(pagina => {
			return pagina.file.name != nombre_pagina;
		});
	
	for (let pagina of paginas.file) {
		if (!pagina.frontmatter.biblio) continue;
		
		let links = [];
		for (let link of pagina.frontmatter.biblio) {
			links.push(link);
		}
		if (links.length === 0) continue;
		
		let link = String(pagina.path);
		link = ` [[${link}|?]]`;

		dv.header(5, pagina.name + link);
		dv.el("hr", "");

		dv.list(links);
	}
}
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
