
```dataviewjs
// Conseguimos todos los archivos que no estan en el root, porque los que estan en el root tienen una carpeta
const paginas = dv.pages().where(pagina => {
	if (!pagina.file.folder) return false;

	return pagina.file.folder != "templates";
});

for (let carpeta of paginas.groupBy(pagina => pagina.file.folder)) {
	dv.header(5, carpeta.rows[0].file.folder);
	dv.el("hr", "");
	
	let links = [];
	for (let pagina of carpeta.rows.file) {
		if (!pagina.frontmatter.biblio) continue;

		for (let link of pagina.frontmatter.biblio) {
			links.push(link);
		}
	}
	dv.list(links);
}
```
