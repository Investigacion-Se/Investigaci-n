<%* 
	tR += "---\n"; 

	const dia = tp.file.creation_date("YYYY-MM-DD");
	tR += `dia: ${dia}\n`;

	let titulo = tp.file.title;
	let [tipoCita, numReferencia] = titulo.split("-")
		.map(texto => texto.trim());
	
	tR += `tipoCita = ${tipoCita}\n`;
	tR += `numRerefencia: ${int(numReferencia)}\n`;

	try {
		switch (tipoCita) {
			case "Libro": await tp.user.citarLibro(tp, tR); break;
			case "Youtube": await tp.user.citarYoutube(tp, tR); break;
			default: return await tp.user.salir("El tipo de cita no existe todavia");
		}
	} catch ({ _, mensaje }) {
		return await tp.user.salir(mensaje);
	}

	tR += "---";
%>