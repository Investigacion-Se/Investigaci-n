---
dia: 2024-07-03
biblio:
  - https://normas-apa.org/wp-content/uploads/Guia-Normas-APA-7ma-edicion.pdf
etapa: terminado
tema: "[[Reglas APA/Investigar reglas APA.md|Reglas APA]]"
---
### Definición
---
El estilo APA separa las citas en dos grandes clases

#### Citas textuales
---
Son consideradas citas textuales, dónde reproducen exactamente las palabras del autor. Y de acuerdo con el tamaño, se cambia el formato de presentación.

#### Citas parafraseadas
---
Son consideradas citas parafraseadas cuando cuentas, en tus propias palabras, las ideas de otro autor. Cada vez que parafrasee a otro autor, también debe acreditar la fuente en el texto.


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