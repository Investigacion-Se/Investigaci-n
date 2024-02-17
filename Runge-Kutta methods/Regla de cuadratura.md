---
dia: 2024-02-17
biblio:
etapa: empezado
tema: "[[Runge-Kutta methods/Índice.md|Runge-Kutta methods]]"
---
### Definición
---




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