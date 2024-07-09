async function regenerarREADME(tp, pathArchivo, nombreArchivo) {
    let archivoTema = app.vault.getAbstractFileByPath(`${pathArchivo}/${nombreArchivo}.md`);
    await app.vault.trash(archivoTema, true);

    let template = tp.file.find_tfile("_templates/Regenerar README.md");
    await tp.file.create_new(template, `${nombreArchivo}`, false, `${pathArchivo}/`);
}

module.exports = regenerarREADME;