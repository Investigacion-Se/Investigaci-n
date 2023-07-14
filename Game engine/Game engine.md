---
dia: 2023-07-12
biblio: [
	https://www.youtube.com/watch?v=F6_WdnzQIQ4&list=PLv8Ddw9K0JPg1BEO-RS-0MYs423cvLVtj&index=19,
	https://book.avr-rust.com/005.3-creating-an-executable-entry-point.html,
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
