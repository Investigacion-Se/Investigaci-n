---
dia: 2024-01-16
biblio: [
	
]
etapa: empezado
---
### Como crear un dockerfile
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


![[Docker/Índice#Archivos]]