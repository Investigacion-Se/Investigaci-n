---
dia: 2024-07-08
etapa: empezado
tema: Docker
indice: "[[Docker/Docker.md|Docker]]"
referencias:
  - "37"
---
```dataviewjs
	await dv.view("_scripts/dataview/mostarEtapa", { etapa: dv.current().etapa });
```
### Definición
---
El archivo debe llamarse "Dockerfile", cada dockerfile empieza con una [[Docker image|imágen]] padre o base, desde el cual empieza.

#### Directivas
---
* `FROM image:tag` permite empezar el dockerfile de una imagen predeterminada
* `RUN comando` permite ejecutar comandos de la shell adentro del contenedor
* `COPY file/dir dest` permite copiar archivos o directorios y agregarlos a un destino
* `WORKDIR dir` cambia el directorio como `cd`
* `CMD ["command", "param 1", ...]` para ejecutar el último comando se usa `CMD` con los parámetros en un array

#### Build
---
* `docker build dir`: permite crear la imagen a partir del dockerfile, donde dir es el directorio donde se encuentra el dockerfile
	* `-t` o `--tag`: permite setear un nombre con el formato `name:tag`



### Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/referenciasView", { archivo: dv.current() });
```