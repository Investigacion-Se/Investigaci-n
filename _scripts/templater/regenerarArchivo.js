async function regenerarREADME(tp, tFileTemplate, nombreArchivo, pathArchivo = "") {
    let pathCompleto = (pathArchivo ? `${pathArchivo}/` : "") + `${nombreArchivo}.md`;

    let archivoTema = app.vault.getAbstractFileByPath(pathCompleto);
    await app.vault.trash(archivoTema, true);

    await tp.file.create_new(tFileTemplate, `${nombreArchivo}`, false, `${pathArchivo}/`);
}

module.exports = regenerarREADME;