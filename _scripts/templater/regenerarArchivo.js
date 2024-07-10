async function regenerarREADME(tp, nombreArchivo, pathArchivo) {
    let pathCompleto = (pathArchivo ? `${pathArchivo}/` : "") + `${nombreArchivo}.md`;
    let archivoTema = app.vault.getAbstractFileByPath(pathCompleto);
    await app.vault.trash(archivoTema, true);

    let template = tp.file.find_tfile("_templates/Regenerar README.md");
    await tp.file.create_new(template, `${nombreArchivo}`, false, `${pathArchivo}/`);
}

module.exports = regenerarREADME;