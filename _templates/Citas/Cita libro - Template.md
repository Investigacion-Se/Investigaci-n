<%* 
	const LIBRO_IMPRESO = "impreso";
	const LIBRO_VERSION_ELECTRONICA = "version electrónica";
	const LIBRO_ELECTRONICO = "electrónica";
	
	tR += "---\n"; 

	const dia = tp.file.creation_date("YYYY-MM-DD");
	tR += `dia: ${dia}\n`;
	tR += "tipoCita = Libro\n";

	const numReferencia = tp.user.obtenerNumReferencias(tp.file.title);
	tR += `numRerefencia: ${numReferencia}\n`;
	
	tp.user.citarLibro(tp, tR);

	tR += "---";
%>