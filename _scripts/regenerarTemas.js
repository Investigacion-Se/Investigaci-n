async function regenerarTemas(tp) {
    let archivoTema = app.vault.getAbstractFileByPath("Temas.md");
    await app.vault.trash(archivoTema, true);

    let template = tp.file.find_tfile("_templates/Regenerar Temas.md");
    await tp.file.create_new(template, "Temas", false, "/");
}

module.exports = regenerarTemas;