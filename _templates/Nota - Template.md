<%* 
	const CITA_RAPIDA = "cita rapida";
	const NUEVA_CITA = "nueva cita";
	const dv = app.plugins.plugins["dataview"].api;

	let titulo = await tp.system.prompt("Nota de:");

	while (!tp.user.validarNombre(titulo)) {
		const mensaje = "El nombre de la nota no puede tener los siguientes caracteres: / \\ : * ? \" < > |";
		console.log(mensaje);
		new Notice(mensaje);

		titulo = await tp.system.prompt("Nota de:");
	}

	let sePudoRenombrar = false;
	let contador = 1;
	let tituloFinal = titulo;

	while (!sePudoRenombrar) {

		try {
			await tp.file.rename(tituloFinal);
			sePudoRenombrar = true;
		} catch {
			contador++;
			tituloFinal = `${titulo} ${contador}`;
		}
	}	

	tR += "---\n"; 

	const dia = tp.file.creation_date("YYYY-MM-DD");
	tR += `dia: ${dia}\n`;
	tR += "etapa: sin-empezar\n";
	
	try {
		const archivoTema = await tp.user.conseguirTema(tp, dv);
		
		tR += `tema: ${archivoTema.tema}\n`;
		tR += `indice: "[[${archivoTema.file.path}|${archivoTema.tema}]]"\n`;
	} catch (e) {
		console.log(e);
		return await tp.user.salir(tp, "No se ingresó un tema");
	}	

	let referencias = dv.pages('"_referencias"')
		.flatMap(referencia => {
			let desc = tp.user.describirCita(tp, referencia);
			if (!desc) {
				console.log("El siguiente archivo tuvo un erro al describirse");
				console.log(referencia);
				return [];
			}
			return [ desc ];
		})
		.sort(ref => -ref.numReferencia);

	let opciones = ["Citar de forma rápida", "Nueva cita", ...referencias.map(ref => tp.user.descripcionTexto(ref))];
	let valores = [CITA_RAPIDA, NUEVA_CITA, ...referencias.map(ref => ref.numReferencia)];
	
	let citar = await tp.system.suggester(opciones, valores,
		false, "Agregar una cita (si no hay nada que citar, apretar ESC)", 13
	);

	let numReferencias = [];
	let notasRapidas = []
	while (citar) {
		if (citar === CITA_RAPIDA) {
			const notaRapida = await tp.system.prompt(
				"Escribir la información necesaria para citar después",
				null, false, true
			);
			if (notaRapida) notasRapidas.push(notaRapida);

		} else if (citar === NUEVA_CITA) {
			let numReferencia = tp.user.generarNumReferencia(dv);
			
			try { 
				await tp.user.generarCita(tp, numReferencia) 
			} catch (_) { 
				continue; 
			}

			numReferencias.push(numReferencia);
		} else {
			numReferencias.push(citar);
		}

		citar = await tp.system.suggester(opciones, valores,
			false, "Agregar una cita (si no hay nada que citar, apretar ESC)", 13
		);		
	}

	tR += "referencias: \n";
	for (let numRef of numReferencias) {
		tR += ` - "${numRef}"\n`;
	}

	tR += "---";
%>
```dataviewjs
	await dv.view("_scripts/dataview/mostarEtapa", { etapa: dv.current().etapa });
```
### Definición
---
<% tp.file.cursor() %>



<%*
	if (notasRapidas.length > 0) {	
		tR += "#### Notas referencias\n---\n";
		let contador = 1;
		for (let nota of notasRapidas) {
			tR += `\n##### Nota num° ${contador++}\n---\n`;
			tR += `${nota}\n`;
		}

		tR += "\n";
	}
_%>

### Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/referenciasView", { archivo: dv.current() });
```