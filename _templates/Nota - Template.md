<%* 
	let titulo = tp.file.title;
	if (titulo.startsWith("temp")) {
		titulo = await tp.system.prompt("Nota de:");
		await tp.file.rename(titulo);
	}

	const CITA_RAPIDA = "cita rapida";
	const NUEVA_CITA = "nueva cita";
	const dv = app.plugins.plugins["dataview"].api;

	tR += "---\n"; 

	const dia = tp.file.creation_date("YYYY-MM-DD");
	tR += `dia: ${dia}\n`;
	tR += "etapa: sin-empezar\n";
	
	try {
		const tema = await tp.user.conseguirTema(tp, dv);
		tR += `tema: ${tema}\n`;
	} catch (_) {
		return await tp.user.salir(tp, "No se ingresó un tema");
	}

	// hacer la parte de tema con dataview que puede ser más fácil
	let referencias = dv.pages('"_referencias"')
		.flatMap(referencia => {
			let desc = tp.user.describirCita(tp, referencia);
			if (!desc) {
				console.log("El siguiente archivo tuvo un erro al describirse");
				console.log(referencia);
				return [];
			}
			return [ desc ];
		});

	let opciones = ["Citar de forma rápida", "Nueva cita"];
	let valores = [CITA_RAPIDA, NUEVA_CITA];
	if (referencias.length > 0) {
		opciones = opciones.concat(referencias.map(ref => tp.user.descripcionTexto(ref)));
		valores = valores.concat(referencias.map(ref => ref.numReferencia));
	}
	
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

			console.log("Cita generada ?");

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
		tR += ` - ${numRef}\n`;
	}

	tR += "---";
%>
```dataviewjs
const archivoActual = dv.current();
const etapa = archivoActual.etapa;

let estadoCallout = "missing";
let texto = "Hubo un error, el estado todavia no se agregó";
switch (etapa) {
	case "sin-empezar": estadoCallout = "info"; 
		texto = "Esta nota todavía no se inició";
		break;
	case "empezado": estadoCallout = "help"; 
		texto = "Todavía no esta terminado, puede modificarse";
		break;
	case "ampliar": estadoCallout = "todo"; 
		texto = "Se puede ampliar el contenido";
		break;
	case "terminado": estadoCallout = "done"; 
		texto = "Esta nota esta completa";
		break;
}

dv.el("p", ` > [!${estadoCallout}]+ Estado de la nota\n > ${texto}`);
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

#### Referencias
---
```dataviewjs
let referenciasArchivo = dv.current().referencias;
if (!referenciasArchivo)
	referenciasArchivo = [];

let referencias = dv.pages('"_referencias"')
	.filter(ref => referenciasArchivo.find(ref.numRerefencia));

for (let referencia of referencias) {
	await dv.view("_dataviewScripts/citaView", { archivo: referencia });
}
```