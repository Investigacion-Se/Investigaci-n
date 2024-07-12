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

	let nuevoTema;
	try {
		nuevoTema = await preguntarNombreTema(dv);
	} catch ({ name: _, message: mensaje }) {
		return await tp.user.salir(tp, mensaje);
	}
		
	tR += `tema: ${nuevoTema}\n`;

	let descripcion = tp.user.describirTemas(indices);
	
	let eleccion;
	try {
		eleccion = await tp.system.suggester(
			["⊕ Crear un nuevo tema", ...descripcion.map(desc => desc.descripcion)], 
			[CREAR_TEMA, ...descripcion.map(desc => desc.archivo)], 
			true, "Crear un nuevo tema o elegir de que tema va a ser subtema"
		);
	} catch {
		return await tp.user.salir(tp, "No se eligió como definir el tema");
	}		

	let path = (eleccion === CREAR_TEMA) ? nuevoTema : `${eleccion.file.folder}/${nuevoTema}`;

	try {
		await app.vault.createFolder(path);
		await tp.file.move(`${path}/${nuevoTema}`);
	} catch (e) {
		const mensaje = "No se pudo crear y mover el tema";
		console.log(mensaje);
		console.log(e);
		return await tp.user.salir(tp, mensaje);
	}

	// let template = tp.file.find_tfile("_templates/Regenerar README.md");
	// await tp.user.regenerarArchivo(tp, template, "README");

	tR += "---\n";

	// TODO: Agregar validacion del nombre, y relacionado a los subtemas
	async function preguntarNombreTema(dv) {
		let nuevoTema = await tp.system.prompt("Temática: (Apretar ESC para salir)");
		if (!nuevoTema) throw Error("No se ingresó un tema");

		while (temas.values.indexOf(nuevoTema) >= 0) {
			new Notice("El tema ya existe, por favor elegir otro, o salir");
			
			nuevoTema = await tp.system.prompt("Temática: (Apretar ESC para salir)");
			if (!nuevoTema) throw Error("No se ingresó un tema");
		}

		return nuevoTema;
	}
_%>
```dataviewjs
await dv.view("_scripts/dataview/mostrarSuperTema", { indice: dv.current() });
await dv.view("_scripts/dataview/mostrarSubTemas", { indice: dv.current() });
```
### ¿Qué se va a investigar?
---
<% tp.file.cursor() %>


#### Archivos
---
```dataviewjs
await dv.view("_scripts/dataview/mostrarArchivos", { indice: dv.current() });
```


### Bibliografía
---
```dataviewjs
await dv.view('_scripts/dataview/biblioIndice', { indice: dv.current() });
```