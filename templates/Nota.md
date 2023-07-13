---
dia: <% tp.file.creation_date("YYYY-MM-DD") %>
biblio: [
	
]
---
### 





#### Biblio
---
```dataviewjs
const pagina_actual = dv.current();

if (pagina_actual) {
	const pagina = pagina_actual.file.frontmatter;
	if (!pagina.biblio || pagina.biblio.length === 0) {
		dv.paragraph("No hay bibliografia");
	} else {
		let links = [];
		for (let link of pagina.biblio) {
			links.push(link);
		}
		dv.list(links)
	}
}
```
