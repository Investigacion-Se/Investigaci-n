<%* 
	tR += "---\n"; 

	const dia = tp.file.creation_date("YYYY-MM-DD");
	tR += `dia: ${dia}\n`;

	let titulo = tp.file.title;
	let [numReferencia, tipoCita] = titulo.split("-")
		.map(texto => texto.trim());
	
	tR += `tipoCita: ${tipoCita}\n`;
	tR += `numReferencia: ${parseInt(numReferencia, 10)}\n`;

	try {
		switch (tipoCita) {
			case "Libro": tR += await tp.user.citarLibro(tp); break;
			case "Youtube": tR += await tp.user.citarYoutube(tp); break;
			default: throw new Error("El tipo de cita no existe todavia");
		}
	} catch ({ name, message }) {
		return await tp.user.salir(tp, message);
	}

	tR += "---";
%>