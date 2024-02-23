---
dia: 2024-02-23
biblio:
 - https://youtube.com/playlist?list=PLrmY5pVcnuE_R5qJ0o30eGw77bWmnrUtL&si=l-PU6I0to_gCSDML
etapa: sin-empezar
tema: "[[Yew/Índice.md|Yew]]"
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