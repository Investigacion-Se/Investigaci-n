---
dia: 2024-02-18
biblio:
 - https://www.youtube.com/watch?v=8K4AShjq-MU
etapa: terminado
tema: "[[Blender/Índice.md|Blender]]"
---
### Definición
---
Tenemos las siguientes categorías
* [[General]]
* [[Hard surface modelling]]
* [[Motion graphics]]
* [[Character animation]]
* [[Procedural shading]]
* [[Modelling]]
* [[Environment]]
* [[Geometry Nodes]]




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