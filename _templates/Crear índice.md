<%*
	let tema = await tp.system.prompt("Temática:");
	await this.app.vault.createFolder(tema);
	
	let template = await tp.file.find_tfile("Índice - Template");
	let titulo = "Índice";
	let carpeta = await this.app.vault.getAbstractFileByPath(tema);

	tp.file.create_new(template, titulo, true, carpeta);
_%>