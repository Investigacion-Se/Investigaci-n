<%* 
	const dv = app.plugins.plugins["dataview"].api;
	const CREAR_TEMA = 1;

	tR += "---\n"; 


	let indices = dv.pages("#Índice")
		.filter(indice => indice.tema !== undefined);
	let temas = indices.map(indice => indice.tema);

	let nuevoTema = await tp.system.prompt("Temática: (Apretar ESC para salir)");
	if (!nuevoTema) 
		return await tp.user.salir(tp, "No se ingresó un tema");

	while (temas.indexOf(nuevoTema) < 0) {
		new Notice("El tema ya existe, por favor elegir otro, o salir");
		
		nuevoTema = await tp.system.prompt("Temática: (Apretar ESC para salir)");
		if (!nuevoTema) 
			return await tp.user.salir(tp, "No se ingresó un tema");
	}

	try {

		

	} catch {
		return await tp.user.salir(tp, "No se eligió como definir el tema");
	}
	

	let path = `${tema}/index`;

	try {
		await this.app.vault.createFolder(tema);
		await tp.file.move(path);
	} catch {
		return await salir();
	}

	let dia = tp.file.creation_date("YYYY-MM-DD");
	tR += `dia: ${dia}\n`;
	tR += "tags: \n - Índice\n";


	tR += "---";

	async function salir() {
		new Notice("El tema ya esta creado, abriendo el tema ya existente...");
		let archivoActual = app.workspace.getActiveFile();

		let archivoExistente = this.app.vault.getAbstractFileByPath(`${path}.md`);
		if (archivoExistente) {
			await app.workspace.getLeaf("tab").openFile(archivoExistente);
		}
		
		await app.vault.trash(archivoActual, true);
		return;
	}
%>
### Que se va a investigar
---
<% tp.file.cursor() %>







### Bibliografía
---
```dataviewjs
	await dv.view("_dataviewScripts/biblioIndice", { indice: dv.current() });
```