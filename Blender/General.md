---
dia: 2024-02-18
biblio:
  - https://youtube.com/playlist?list=PLjEaoINr3zgEPv5y--4MKpciLaoQYZB1Z&si=Sv76fBmOtY8fOcqJ
etapa: sin-empezar
tema: "[[Blender/index|Blender]]"
---
### Definición
---

* [[Blender viewport]]


#### Hotkey
---
![[Blender hotkey#General]]




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