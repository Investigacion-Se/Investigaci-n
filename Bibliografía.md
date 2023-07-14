## Carpetas
---
Lista de todas las carpetas siendo investigadas, con tods los links que usan. Cualquier cosa ver el [[README|read me]].

```dataviewjs
// Conseguimos todos los archivos que no estan en el root, porque los que estan en el root tienen una carpeta
const paginas = dv.pages().where(pagina => {
	if (!pagina.file.folder) return false;

	return pagina.file.folder != "_templates";
});

let tabla = [];
for (let carpeta of paginas.groupBy(pagina => pagina.file.folder)) {

	let indice = undefined;
	
	let links = [];
	for (let pagina of carpeta.rows.file) {
		if (pagina.name == "Índice") {
			indice = pagina.path;
		}

		if (!pagina.frontmatter.biblio) continue;

		for (let link of pagina.frontmatter.biblio) {
			links.push(link);
		}
	}	
	if (links.length == 0) continue;

	let link_a_carpeta = "";
	if (indice !== undefined) {
		link_a_carpeta = String(indice);
		link_a_carpeta = ` [[${link_a_carpeta}|?]]`;
	}
	
	let header = carpeta.rows[0].file.folder + link_a_carpeta;

	dv.header(5, header);
	dv.el("hr", "");

	dv.list(links);
}
```
