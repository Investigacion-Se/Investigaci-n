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

	while (temas.values.indexOf(nuevoTema) >= 0) {
		new Notice("El tema ya existe, por favor elegir otro, o salir");
		
		nuevoTema = await tp.system.prompt("Temática: (Apretar ESC para salir)");
		if (!nuevoTema) 
			return await tp.user.salir(tp, "No se ingresó un tema");
	}

	tR += `tema: ${nuevoTema}\n`;

	// { archivo, nivel, tema, subTemas }
	let temasOrdenados = ordenarTemas(indices);
	let descripcion = generarDescripcion(temasOrdenados);
	
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

	let path = `${nuevoTema}`;
	if (eleccion === CREAR_TEMA) {
		tR += "nivel: 0\n";
	} else {
		// Es subtema
		path = `${eleccion.file.folder}/${path}`;
		tR += `nivel: ${parseInt(eleccion.nivel, 10) + 1}\n`;
		tR += `superTema: ${eleccion.tema}\n`;
	}

	try {
		await this.app.vault.createFolder(path);
		await tp.file.move(`${path}/index`);
	} catch (e) {
		const mensaje = "No se pudo crear y mover el tema";
		console.log(mensaje);
		console.log(e);
		return await tp.user.salir(tp, mensaje);
	}

	// Agregamos subtema al tema elegido
	if (eleccion !== CREAR_TEMA) {
		let superTema = tp.file.find_tfile(eleccion.file.path);
		await app.fileManager.processFrontMatter(superTema, (frontmatter) => {
			if (!frontmatter["subTemas"]) {
				frontmatter["subTemas"] = [ `${nuevoTema}` ];
			} else {
				frontmatter["subTemas"].push(`${nuevoTema}`);
			}
		});
	}	

	tR += "---";

	function ordenarTemas(indices) {
		let temas = indices
			.map(archivo => {
				return { 
					archivo: archivo, 
					nivel: archivo.nivel, 
					tema: archivo.tema, 
					superTema: archivo.superTema,
					subTemas: undefined
				}
			})
			.groupBy(data => data.nivel)
			.sort(grupo => grupo.key)
			.map(grupo => grupo.rows)
			.values;

		for (let i = temas.length - 1; i > 0; i--) {
			let archivosNivelI = temas[i];
			let archivosNivelIAnterior = temas[i - 1];

			let superTemas = archivosNivelI.groupBy(data => data.superTema);

			for (let archivoNivelIAnterior of archivosNivelIAnterior) {
				archivoNivelIAnterior.subTemas = superTemas.find(data => data.key === archivoNivelIAnterior.tema)?.rows;
			}
		}

		return temas[0];
	}

	/*
		● Tema
		├─○ Subtema
		│ └─○ Subsubtema
		├─○ Subtema
		│ ├─○ Subsubtema
		│ ├─○ Subsubtema
		│ │ ├─○ Subsubtema
		│ │ ├─○ Subsubtema
		│ │ └─○ Subsubtema
		│ └─○ Subsubtema
		└─○ Subtema
		● Tema
	*/

	function generarDescripcion(temas) {
		let guardarlo = [];
		
		for (let i = 0; i < temas.length; i++) {
			let data = temas[i];
			let descripcion = "";
			if (data.nivel == 0) { 
				descripcion = `● ${data.tema}`;
			} else {
				for (let i = 0; i < data.nivel - 1; i++) {
					descripcion += "└⇢ ";
				}
				descripcion += `└⇢ ○ ${data.tema}`;
			}
			guardarlo.push({ archivo: data.archivo, descripcion: descripcion });

			if (data.subTemas !== undefined) {
				let guardadoSiguienteNivel = generarDescripcion(data.subTemas, guardarlo);
				guardarlo = guardarlo.concat(guardadoSiguienteNivel);
			}
		}

		return guardarlo;
	}

%>
<%* 
	let subtemas = tp.frontmatter["subTemas"];
	let superTema = tp.frontmatter["superTema"];
	tR += tp.user.infoIndice("", subtemas, superTema);
_%>