---
dia: 2024-02-20
biblio:
etapa: ampliar
tema: "[[Blender/Índice.md|Blender]]"
---
### Definición
---
Tenemos diferentes forma de visualizar el contenido que estamos viendo, y estas se llaman viewports
* Viewport shading:
	* Ligero y optimizado para visualizar mientras se esta trabajando
* Viewport rendered
	* Muestra la [[Renderización|renderización]] final



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