---
dia: 2024-02-20
biblio: 
etapa: ampliar
tema: "[[Blender/index|Blender]]"
---
### Definición
---

#### General
---
* Shift + a: [[Blender add|Add]]
* Shift + middle mouse: move the view
* g: move object 
	* esc o click derecho: cancelar
	* click izquierdo: aceptar
	* x, y, z: mueve en ese eje
	* middle mouse: snap al eje más cercano
* f12: renderizar
* numpad 0 :ir a la vista de la camara 
* n: propiedades
	* Selecionando la camara
		* View
			* View lock: 
				* Camara to view: vincula el movimiento con la camara


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