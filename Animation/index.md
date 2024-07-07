---
dia: 2023-07-15
tags:
  - Índice
tema: Animation
nivel: "0"
---
### Que se va a investigar
---
Vamos a ver como producir las mejores animaciones, con el menor esfuerzo posible y la mayor expresividad posible. Esto nos va a llevar a aprender sobre muchas cosas como inverse kinematic, rigging y otras cosas


### Bibliografía
---
```dataviewjs
const pagina_actual = dv.current();

let carpeta = '"Animation"';

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

let carpeta = '"Animation"';

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
