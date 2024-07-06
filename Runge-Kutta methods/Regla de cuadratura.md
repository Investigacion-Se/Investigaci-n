---
dia: 2024-02-17
biblio:
  - https://es.wikipedia.org/wiki/Integraci%C3%B3n_num%C3%A9rica
etapa: terminado
tema: "[[Runge-Kutta methods/index|Runge-Kutta methods]]"
---
### Definición
---
El término de cuadratura numérica es más o menos sinónimo de [[Integración numérica|integración numérica]], especialmente si se aplica a integrales de una dimensión.

También se lo relaciona con el [[Tablero de Butcher|tablero de Butcher]] ![[Tablero de Butcher#Definición]]

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