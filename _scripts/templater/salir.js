async function salir(tp, mensaje) {
    new Notice(`Hubo un error\n${mensaje}`);
    console.log(`Hubo un error\n${mensaje}`);

    const RESPUESTA_AFIRMATIVA = 1;
    const respuestaEliminar = await tp.system.suggester(
        ["Si, quiero eliminar este archivo", "No, no quiero eliminar este archivo"],
        [RESPUESTA_AFIRMATIVA, undefined],
        false, "Quiere eliminar este archivo?"
    );


    if (respuestaEliminar == RESPUESTA_AFIRMATIVA) {
        let archivoActual = app.workspace.getActiveFile();
        let path = archivoActual.path;

        let archivoExistente = app.vault.getAbstractFileByPath(path);
        if (archivoExistente) {
            await app.workspace.getLeaf("tab").openFile(archivoExistente);
        }
        
        await app.vault.trash(archivoActual, true);
    }
}

module.exports = salir;