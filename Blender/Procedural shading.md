---
dia: 2024-02-18
biblio:
  - https://www.youtube.com/@RyanKingArt
  - https://www.youtube.com/playlist?list=PLNShHVjao84dtGx6VxFhkeSDPX1gt4NuS
  - https://youtu.be/O3gLBhC353Y?si=C3cP_NMsV2BltcIB
etapa: sin-empezar
tema: "[[Blender/index|Blender]]"
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