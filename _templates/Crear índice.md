<%*
	let template = await tp.file.find_tfile("Índice - Template");
	let titulo = "Índice";
	let carpeta = await this.app.vault.getAbstractFileByPath(tp.file.folder());

	tp.file.create_new(template, titulo, true, carpeta);
_%>