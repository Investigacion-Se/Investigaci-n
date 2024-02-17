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
	let indice = dv.pages("#Índice").find(indice => indice.file.folder == tema).file.path;

	tR += `tema: "[[${indice}|${tema}]]"\n`;
	tR += "---";
%>
### Definición
---
<% tp.file.cursor() %>



```dataviewjs 
const paginaActual = dv.current();
let archivos = dv.pages(`"${paginaActual.file.folder}" and -#Índice`)
	.where(pagina => pagina.file.path != paginaActual.file.path);

dv.header(3, "Archivos");
dv.span("---");

archivos = (archivos.length > 0) 
	? archivos.map(archivo => {
			let nombre = archivo.file.name;
			let path = archivo.file.path;
			return `[[${path}|${nombre}]]`;
		}) 
	: ["No hay más archivos"];

dv.list(archivos);	
```