async function conseguirTema(tp, dv) {
    console.log("Hola antes");
    let carpeta = tp.file.folder(true);
	if (carpeta == "/" || carpeta == "")
		return await preguntarTema(dv);

    let archivos = dv.pages(`"${carpeta}" and #Índice`);

    switch (archivos.values.length) {
        case 1: return archivos.values[0];
        default: return await preguntarTema(dv);
    }
}

async function preguntarTema(tp, dv) {
    console.log("Hola preguntarTema");
    let temas = dv.pages("#Índice")
        .map(archivo => {
            let tema = archivo.tema;
            if (archivo.tags.includes("Subtema"))
                tema = `Subtema - ${tema}`;

            return {
                archivo: archivo,
                texto: tema
            }
        });

    return await tp.system.suggester(
        temas.map(tema => tema.texto),
        temas.map(tema => tema.archivo),
        true, "Cuál es el tema del archivo?"
    );
}

module.exports = conseguirTema;