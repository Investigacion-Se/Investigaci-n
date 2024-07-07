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
	
	// { archivo, nivel, orden }
	let temasOrdenados = ordenarTemas(temas);



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

	function ordenarTemas(temas) {

		// repetir groupBy

		let ordenActual = 0;
		temas = temas.map(archivo => {
			if (!archivo.tags.includes("Índice") || archivo.tags.includes("Subtema")) {
				return { archivo: archivo, id: 0, nivel: 1, orden: 0 };
			}
			return { archivo: archivo, id: ordenActual++, nivel: 0, orden: 0 };
		})

		let maximoOrden = 0;

		// asignamos id, nivel, orden

		const potenciaMaximoOrden = Math.pow(10, -Math.floor(Math.log10(ordenActual)) - 1);

		return temas.sort(data => {
			return data.id - orden * potenciaMaximoOrden;
		}).map(data => {
			return { archivo: data.archivo, nivel: data.nivel, orden: data.orden };
		});
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