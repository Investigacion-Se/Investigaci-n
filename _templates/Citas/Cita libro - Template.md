<%* 
	const LIBRO_IMPRESO = "impreso";
	const LIBRO_VERSION_ELECTRONICA = "version electrónica";
	const LIBRO_ELECTRONICO = "electrónica";
	
	tR += "---\n"; 

	let dia = tp.file.creation_date("YYYY-MM-DD");
	tR += `dia: ${dia}\n`;

	tR += "tipoCita = Libro\n";

	const tipo = await tp.system.suggester(
		["Libro impreso", "Libro en versión electrónica", "Libro electrónico"],
		[LIBRO_IMPRESO, LIBRO_VERSION_ELECTRONICA, LIBRO_ELECTRONICO],
		false, "Qué tipo de cita de un libro es?"
	);

	if (!tipo) return salir("No se ingresó tipo de libro");
	
	tR += `tipoLibro: ${tipo}\n`;
	
	const citaCapitulo = await tp.system.suggester(
		["No, no voy a citar un capítulo", "Sí, voy a citar un capítulo"],
		[false, true],
		false, "La cita es de un capítulo de un libro?"
	);

	tR += `citaCapitulo: ${!citaCapitulo ? false : true}\n`;

	tR += "---";

	async function salir(mensaje) {
		new Notice(`Hubo un error\n${mensaje}`);

		const RESPUESTA_AFIRMATIVA = 1;
		const respuestaElimianr = tp.system.suggester(
			["Si, quiero eliminar este archivo", "No, no quiero eliminar este archivo"],
			[RESPUESTA_AFIRMATIVA, undefined],
			false, "Quiere eliminar este archivo?"
		);

		if (respuestaEliminar == RESPUESTA_AFIRMATIVA) {
			let archivoActual = app.workspace.getActiveFile();
	
			let archivoExistente = this.app.vault.getAbstractFileByPath(`${path}.md`);
			if (archivoExistente) {
				await app.workspace.getLeaf("tab").openFile(archivoExistente);
			}
			
			await app.vault.trash(archivoActual, true);
		}
	}
%>