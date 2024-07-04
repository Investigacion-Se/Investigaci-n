async function conseguirTema(tp, dv) {
    let carpeta = tp.file.folder(true);
	if (carpeta == "/" || carpeta == "")
		return preguntarTema(dv);
	
    let archivos = dv.pages(`"${carpeta}"`)
        .filter(archivo => {
            if (archivo.tags.includes("Subtema"))
                return false;
            
            return archivo.tags.includes("Índice");
        });

    switch (archivos.length) {
        case 1: return archivos[0].tema;
        default: return preguntarTema(dv);
    }
}

async function preguntarTema(tp, dv) {
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

    return tp.system.suggester(
        temas.map(tema => tema.texto),
        temas.map(tema => tema.archivo.tema),
        true, "Cuál es el tema del archivo?"
    );
}

module.exports = conseguirTema;