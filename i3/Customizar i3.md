---
dia: 2024-02-21
biblio:
 - https://fedoramagazine.org/getting-started-i3-window-manager/
etapa: empezado
tema: "[[i3/Índice.md|i3]]"
---
### Definición
---
Yendo a la configuración que debería estar en `~/.config/i3/config`.

En caso de volver al default, eliminamos nuestro archivo y corremos 
```bash 
i3-config-wizard
```

Y se va a volver a crear el archivo de configuración default.

#### Cambiar terminal
---
En la línea que inicialmente dice 
```shell
bindsym $mod+Return exec i3-sensible-terminal
```

Donde podemos cambiar `i3-sensible-terminal` por el nombre de la terminal que queramos.

#### Custom hotkeys
---
Se puede agregar a la lista de [[i3 hotkeys|hotkeys]], haciendo 
```bash
$mod+<key> exec <app>
```

#### Custom wallpaper
---
Inicialmente i3 no pone ningún wallpaper, por lo que necesitamos una herramienta para que lo haga, en este caso usaremos `feh`, y agregaremos 

```shell
exec --no-startup-id feh --bg-scale ~/path/to/wallpaper.png
```

Y recargamos la configuración

#### Mover la barra de status
---
Hay una sección que dice 
```shell
bar {
	# codigo
}
```

Podemos agregar dentro de esas llaves la linea
```shell
position top
```

Moviendo la barra hacia arriba



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