---
dia: 2023-08-24
tags:
  - Índice
tema: Rust parser
nivel: "0"
---
### Que se va a investigar
---
Intención de ver como poder parsear el código de rust para usarlo en las macros


### Bibliografía
---
```dataviewjs
const pagina_actual = dv.current();

let carpeta = '"Rust parser"';

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

### Referencia
---
* https://docs.rs/typed-html/latest/typed_html/


### Archivos
---
```dataviewjs
const pagina_actual = dv.current();

let carpeta = '"Rust parser"';

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
