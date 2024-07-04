<%* 
	const LIBRO_IMPRESO = "impreso";
	const LIBRO_VERSION_ELECTRONICA = "version electrónica";
	const LIBRO_ELECTRONICO = "electrónica";
	
	tR += "---\n"; 

	let dia = tp.file.creation_date("YYYY-MM-DD");
	tR += `dia: ${dia}\n`;
	tR += "tipoCita = Libro\n";
	// Obtener numero de referencia por el nombre del archivo
	// hacerlo un script
	tR += `numRerefencia: 1\n`;
	
	tp.user.citarLibro(tp, tR);

	tR += "---";
%>