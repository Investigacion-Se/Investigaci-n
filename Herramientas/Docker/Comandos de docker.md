---
dia: 2024-07-08
etapa: empezado
tema: Docker
indice: "[[Docker|Docker]]"
referencias:
  - "37"
---
```dataviewjs
	await dv.view("_scripts/dataview/mostarEtapa", { etapa: dv.current().etapa });
```
### Definición
---
* `docker images` : Lista todas las [[Docker image|imágenes]]
* `docker ps`: Lista todos los [[Docker container|contenedores]]
	* `-a` o `--all`: lista todos los contenedores (que corren y los que no)
* `docker pull image:tag`: Busca en [dockerhub.com](https://hub.docker.com/) la imagen y usa la tag para distinguir que versión se quiere, y la descarga
* `docker run imagen:tag`: Corre al imagen especifica (no necesariamente descargada)
	* `-d` o `--detach`: corre la imagen en el background
	* `-p` o `--publish` + `host_port:container:port`: bindea un puerto del contenedor a un puerto del host
	* `--name = nombre`: asigna un nombre especifico al contenedor
* `docker stop container_id/nombre`: Detiene un contenedor 
* `docker logs container_id/nombre`: Muestra los logs de un contenedor corriendo
* `docker start container_id/nombre`: Empieza a correr un contenedor que fue detenido (`docker stop`)



### Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/referenciasView", { archivo: dv.current() });
```