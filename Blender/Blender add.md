---
dia: 2024-02-20
biblio:
etapa: empezado
tema: "[[Blender/Índice.md|Blender]]"
---
### Definición
---
Tenemos las opciones
* Mesh, que agrega [[Primivitas|primitivas]]



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