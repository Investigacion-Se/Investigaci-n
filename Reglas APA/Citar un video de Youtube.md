---
dia: 2024-07-03
biblio:
  - https://normas-apa.org/referencias/citar-youtube/
etapa: terminado
tema: "[[Reglas APA/Investigar reglas APA.md|Reglas APA]]"
---
### Definición
---
Con las diferentes formas de información de hoy día, es posible que necesitemos referenciar o citar textos desde diferentes fuentes así como vídeos en YouTube.

La referencias de Youtube siguen el estándar de **quién** (autor, usuario de youtube), **cuándo** (fecha de publicación del vídeo), **qué** (título del vídeo) y **dónde** (URL del vídeo).

Nombre del autor. \[Nombre de usuario en Youtube\] (fecha). _Título del video_ \[Video\]. Youtube. http://youtube.com/url-del-video

### Archivos
---
```dataviewjs 
const paginaActual = dv.current();
let archivos = dv.pages(`"${paginaActual.file.folder}" and -#Índice`)
	.where(pagina => pagina.file.path != paginaActual.file.path);

archivos = (archivos.length > 0) 
	? archivos.map(archivo => {
			let nombre = archivo.file.name;
			let path = archivo.file.path;
			return `[[${path}|${nombre}]]`;
		}) 
	: ["No hay más archivos"];

dv.list(archivos);	
```