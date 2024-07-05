---
dia: 2024-07-03
biblio:
  - https://normas-apa.org/referencias/citar-leyes-documentos-legales/
etapa: sin-empezar
tema: "[[Reglas APA/index|Reglas APA]]"
aliases:
  - Citar leyes
  - Citar documentos legales
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