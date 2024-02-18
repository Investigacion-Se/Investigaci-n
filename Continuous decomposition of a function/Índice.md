---
dia: 2023-07-14
tags:
  - Índice
---
### Que se va a investigar
---
Comprender como descomponer una función, posiblemente diferencial, de forma continua, es decir que para recrearla, se tenga que calcular a partir de una integral de su descomposición.


### Bibliografía
---
```dataviewjs
const pagina_actual = dv.current();

let carpeta = '"Continuous decomposition of a function"';

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

let carpeta = '"Continuous decomposition of a function"';

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