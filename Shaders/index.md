---
dia: 2023-12-01
tags:
  - Índice
tema: Shaders
nivel: 0
---
### Que se va a investigar
---
La idea es ver todo el proceso del renderizado, desde las meshes hasta los fragmentos


### Bibliografía
---
```dataviewjs
const pagina_actual = dv.current();

let carpeta = '"Shaders"';

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

let carpeta = '"Shaders"';

if (pagina_actual) {
	const nombre_pagina = pagina_actual.file.name;
	const paginas = dv.pages(carpeta)
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
