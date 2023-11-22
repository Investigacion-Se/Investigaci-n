<%*
	let template = await tp.file.find_tfile("Referencia - Template");
	let titulo = await tp.system.prompt("Referencia de:");
	let carpeta = await this.app.vault.getAbstractFileByPath("Referencias");

	tp.file.create_new(template, titulo, true, carpeta);
_%>