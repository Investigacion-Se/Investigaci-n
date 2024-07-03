---
dia: 2024-07-03
biblio:
 - https://normas-apa.org/referencias/citar-pagina-web/
etapa: sin-empezar
tema: "[[Reglas APA/Investigar reglas APA.md|Reglas APA]]"
---
### Definición
---
Debes utilizar el estilo de cita de páginas web si no hay otra categoría de referencia que se ajuste más específicamente al tipo de trabajo que quieras citar.


* Página web con contenido estático
	* Apellido, A., Apellido, B., y Apellido, C. (20 de mayo de 2020). __Título del artículo de la página web__. Nombre del sitio web. https://url.com
* Página web con actualizaciones frecuentes
	* Apellido, A., Apellido, B., y Apellido, C. (20 de mayo de 2020). _Título __del artículo__ de la página web_. Nombre del sitio web. Recuperado el dia mes año de https://url.com
* Formato especial adentro de una página web
	* Apellido, A. (03 de agosto de 2020). _Título del archivo_ \[Archivo Excel\]. Nombre del sitio web. https://url.com


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