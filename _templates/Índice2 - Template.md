<%* 
	tR += "---\n"; 

	let tema = await tp.system.prompt("Temática:");
	let path = `${tema}/Índice`;

	try {
		await this.app.vault.createFolder(tema);
		await tp.file.move(path);
	} catch {
		new Notice("El tema ya esta creado, abriendo el tema ya existente...");
		let archivoActual = app.workspace.getActiveFile();

		let archivoExistente = this.app.vault.getAbstractFileByPath(`${path}.md`);
		if (archivoExistente) {
			await app.workspace.getLeaf("tab").openFile(archivoExistente);
		}
		
		await app.vault.trash(archivoActual, true);
		return;
	}

	let dia = tp.file.creation_date("YYYY-MM-DD");
	tR += `dia: ${dia}\n`;

	tR += "tags: \n - Índice\n";

	tR += "---";
%>
### Que se va a investigar
---
<% tp.file.cursor() %>


### Bibliografía
---
```dataviewjs
const pagina_actual = dv.current();

let carpeta = '"<% tp.file.folder() %>"';

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
