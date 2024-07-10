async function preguntarArchivo(tp, indices, texto, otrasOpciones = [], otrosValores = []) {
    let descripcion = tp.user.describirTemas(indices);

    return await tp.system.suggester(
        otrasOpciones.concat(descripcion.map(desc => desc.descripcion)),
        otrosValores.concat(descripcion.map(desc => desc.archivo)),
        true, texto
    );
}

module.exports = preguntarArchivo;