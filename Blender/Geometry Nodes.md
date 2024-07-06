---
dia: 2024-02-18
biblio:
  - https://youtu.be/ZerJnivvBn4?si=1uxW8VkFzWsCUGKS
etapa: empezado
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