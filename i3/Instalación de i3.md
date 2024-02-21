---
dia: 2024-02-21
biblio:
  - https://fedoramagazine.org/getting-started-i3-window-manager/
etapa: terminado
tema: "[[i3/Índice.md|i3]]"
---
### Definición
---
En la instalación para fedora, tenemos q instalar 
```bash
sudo dnf install i3 i3status dmenu i3lock xbacklight 
```

Después al loggear de nuevo, buscando la forma de conseguir opciones, podemos habilitar i3, y ahí iniciar

La primera vez aparecerá dos carteles, el primero preguntará si se quiere crear un archivo de configuración, en el caso de que sí, se preguntará si se usa win o alt como tecla líder.

Y ya esta completamente instalado


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