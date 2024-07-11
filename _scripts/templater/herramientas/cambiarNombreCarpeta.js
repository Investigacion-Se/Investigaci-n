async function cambiarNombreCarpeta(nombreCarpeta, nuevoNombre) {
    let pathDestino = nombreCarpeta.split("/");
    pathDestino = pathDestino.slice(0, pathDestino.length - 1);
    pathDestino.push(nuevoNombre);
    pathDestino = pathDestino.join("/");

    await app.vault.rename(
        app.vault.getAbstractFileByPath(nombreCarpeta), 
        pathDestino
    );
}

module.exports = cambiarNombreCarpeta;