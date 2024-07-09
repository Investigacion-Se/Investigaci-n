async function conseguirTema(tp, dv) {
    let carpeta = tp.file.folder(true);
    let todosIndices = dv.pages("#Índice");
	if (carpeta == "/" || carpeta == "")
		return await preguntarTema(tp, todosIndices);

    let archivos = dv.pages(`"${carpeta}" and #Índice`);

    switch (archivos.values.length) {
        case 0: return await preguntarTema(tp, todosIndices);
        case 1: return archivos.values[0];
        default: return await preguntarTema(tp, archivos);
    }
}

async function preguntarTema(tp, indices) {
    let descripcion = tp.user.describirTemas(indices);

    return await tp.system.suggester(
        descripcion.map(desc => desc.descripcion),
        descripcion.map(desc => desc.archivo),
        true, "Cuál es el tema del archivo?"
    );
}

module.exports = conseguirTema;