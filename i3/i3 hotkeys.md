---
dia: 2024-02-21
biblio:
etapa: ampliar
tema: "[[i3/Índice.md|i3]]"
---
### Definición
---
Se una $mod como la tecla líder que se haya elegido en la [[Instalación de i3|instalación]]
* $mod + enter: abre la terminal
* $mod + d: abre dmenu
* $mod + v: hace que la próxima ventana que se abra va a ser de forma horizontal
* $mod + f: fullscreen
* $mod + shift + q: para cerrar, también se puede abrir el programa kill
* $mod + #: donde # es un número del 1 al 9, crea un nuevo workspace en ese número
* $mod + shift + #: donde # es un número del 1 al 9, mueve la ventana al workspace #
* $mod + shift + e: te deja salir de i3
* $mod + shift + r: recompila la [[Customizar i3|customización]] hecha
	* En caso de algún error, aparecerá un mensaje
* $mod + r: resize mode



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