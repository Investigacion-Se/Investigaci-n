---
dia: 2024-02-23
biblio:
 - https://youtube.com/playlist?list=PLVnntJRoP85JHGX7rGDu6LaF3fmDDbqyd&si=tfuoQ_uIqBsCzAGX
etapa: sin-empezar
tema: "[[Bevy/Índice.md|Bevy]]"
---
### Definición
---




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