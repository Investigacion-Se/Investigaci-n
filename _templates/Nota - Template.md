<%* 
	const CITA_RAPIDA = "cita rapida";
	const NUEVA_CITA = "nueva cita";

	tR += "---\n"; 

	const dia = tp.file.creation_date("YYYY-MM-DD");
	tR += `dia: ${dia}\n`;
	tR += "etapa: sin-empezar\n";
	
	const dv = app.plugins.plugins["dataview"].api;

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

	const opciones = ["Citar de forma rápida", "Nueva cita"]
		.concat(referencias.map(ref => tp.user.descripcionTexto(ref)));
	const valores = [CITA_RAPIDA, NUEVA_CITA]
		.concat(referencias.map(ref => ref.numReferencia));
	
	const citar = await tp.system.suggester(opciones, valores,
		false, "Agregar una cita (si no hay nada que citar, apretar ESC)", 13
	);

	let numReferencias = [];
	let notasRapidas = []
	while (citar) {
		if (citar === CITA_RAPIDA) {
			const notaRapida = tp.system.prompt(
				"Escribir la información necesaria para citar después",
				null, false, true
			);
			if (notaRapida) notasRapidas.push(notaRapida);

		} else if (citar === NUEVA_CITA) {
			
		} else {
			numReferencias.push(citar);
		}
	}

	tR += "referencias: \n";
	for (let numRef of numReferencias) {
		tR += `  - ${numRef}\n`;
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
			tR += `##### Nota num.${contador++}\n---\n`;
			tR += `${nota}\n`;
		}
	}
_%>

#### Referencias
---
```dataviewjs
let referenciasArchivo = dv.current().referencias;
if (!referenciasArchivo)
	referenciasArchivo = [];

let referencias = dv.pages('"_referencias"')
	.filter(ref => refrerenciasArchivo.find(ref.numRerefencia));

for (let referencia of referencias) {
	
}
```