async function citarLibro(tp, tR) {
    const LIBRO_IMPRESO = "impreso";
	const LIBRO_VERSION_ELECTRONICA = "version electrónica";
	const LIBRO_ELECTRONICO = "electrónica";
    
    let tipo = undefined;
    try{ 
        tipo = await tp.system.suggester(
            ["Libro impreso", "Libro en versión electrónica", "Libro electrónico"],
            [LIBRO_IMPRESO, LIBRO_VERSION_ELECTRONICA, LIBRO_ELECTRONICO],
            true, "Qué tipo de cita de un libro es?"
        );
    } catch (_) {
        return await tp.user.salir(tp, "No se ingresó tipo de libro");
    }
	
	tR += `tipoLibro: ${tipo}\n`;
	
	const citaCapitulo = await tp.system.suggester(
		["No, no voy a citar un capítulo", "Sí, voy a citar un capítulo"],
		[false, true],
		false, "La cita es de un capítulo de un libro?"
	);

	tR += `citaCapitulo: ${!citaCapitulo ? false : true}\n`;
}

module.exports = { citarLibro };