---
dia: 2024-07-03
biblio:
  - https://normas-apa.org/referencias/citar-peliculas-o-series-de-television/
etapa: sin-empezar
tema: "[[Reglas APA/Investigar reglas APA.md|Reglas APA]]"
aliases:
  - Citar películas
  - Citar series de televisión
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