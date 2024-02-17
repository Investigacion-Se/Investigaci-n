---
dia: 2024-02-17
biblio:
 - https://en.wikipedia.org/wiki/Runge%E2%80%93Kutta_methods#Adaptive_Runge%E2%80%93Kutta_methods
etapa: terminado
tema: "[[Runge-Kutta methods/Índice.md|Runge-Kutta methods]]"
---
### Definición
---
Los métodos adaptativos son diseñados para producir una estimación el [[Error de truncamiento|error de truncamiento local]] de un paso simple [[Método de Runge-Kutta|Runge-Kutta]]. 



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