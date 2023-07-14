---
dia: <% tp.file.creation_date("YYYY-MM-DD") %>
---
### Bibliografía
```dataviewjs
const pagina_actual = dv.current();

let carpeta = '"<% tp.file.folder() %>"';

if (pagina_actual) {
	const nombre_pagina = pagina_actual.file.name;
	const paginas = dv.pages(carpeta)
		.where(pagina => {
			return pagina.file.name != nombre_pagina;
		});
	
	let links = [];
	for (let pagina of paginas.file) {
		if (!pagina.frontmatter.biblio) continue;
		
		dv.header(5, pagina.name);
		dv.el("hr", "");

		for (let link of pagina.frontmatter.biblio) {
			links.push(link);
		}
	}
	dv.list(links);
}
```


