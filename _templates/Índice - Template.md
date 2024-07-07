<%* 
	const dv = app.plugins.plugins["dataview"].api;
	const CREAR_TEMA = 1;

	tR += "---\n"; 

	let dia = tp.file.creation_date("YYYY-MM-DD");
	tR += `dia: ${dia}\n`;
	tR += "tags: \n - Índice\n";

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

	let path = "/index";
	// let path = `${tema}/index`;
	temas = dv.pages("#Índice and -#Subtema")
	.map(archivo => {
		return {
			archivo: archivo,
			tema: archivo.tema
		}
	});
	
	
	let todosSubtemas = dv.pages("#Subtema");
	let subtemas = todosSubtemas
		.filter(subtema => temas.find(indice => indice.tema == subtema.dependencia));



	/*
		● Tema
		├─○ Subtema
		│ └─○ Subsubtema
		├─○ Subtema
		│ ├─○ Subsubtema
		│ └─○ Subsubtema
		└─○ Subtema
		● Tema
	*/

	try {
		let 


	} catch {
		return await tp.user.salir(tp, "No se eligió como definir el tema");
	}		

	try {
		await this.app.vault.createFolder(tema);
		await tp.file.move(path);
	} catch (e) {
		const mensaje = "No se pudo crear y mover el tema";
		console.log(mensaje);
		console.log(e);
		return await tp.user.salir(tp, mensaje);
	}

	tR += "---";
%>
### Que se va a investigar
---
<% tp.file.cursor() %>







### Bibliografía
---
```dataviewjs
	await dv.view("_dataviewScripts/biblioIndice", { indice: dv.current() });
```