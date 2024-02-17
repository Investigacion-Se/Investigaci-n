<%* 
	let titulo = tp.file.title;
	if (titulo.startsWith("Untitle")) {
		titulo = await tp.system.prompt("Nota de:");
		await tp.file.rename(titulo);
	}
	tR += "---\n";
	let dia = tp.file.creation_date("YYYY-MM-DD");
	tR += `dia: ${dia}\n`

	tR += "biblio:\n";

	let contador = 1;
	let link = await tp.system.prompt("Biblio: ");
	while (link) {
		contador++;
		tR += ` - ${link}\n`;
		link = await tp.system.prompt("Biblio n°" + contador + ": ");
	}
 
	let etapas = ["sin-empezar", "empezado", "ampliar", "terminado"];
	let etapa = await tp.system.suggester(etapa => {
			etapa = etapa.replaceAll("-", " ");
			return `${etapa.charAt(0).toUpperCase()}${etapa.slice(1)}`;
		}, etapas, false, "En que etapa del proceso se encuentra");
	tR += `etapa: ${etapa}\n`;

	const dv = this.app.plugins.plugins["dataview"].api;
	
	let carpeta = tp.file.folder(true);
	let tema = carpeta.split("/")[0];
	let indice = dv.pages("#Índice").find(indice => indice.file.folder == tema);

	tR += `tema: [[${indice.file.path}|${tema}]]\n`;
	tR += "---";
%>




### Archivos
---
