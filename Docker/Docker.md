---
dia: 2024-07-08
tags: 
 - Índice
tema: Docker
nivel: 0
---
```dataviewjs
await dv.view("_dataviewScripts/mostrarSuperTema", { superTema: dv.current().superTema });
await dv.view("_dataviewScripts/mostrarSubTemas", { subTemas: dv.current().subTemas });
```
### ¿Qué se va a investigar?
---
Saber y traer todos los comandos de docker y relacionados como docker compose


#### Archivos
---
```dataviewjs
await dv.view("_dataviewScripts/mostrarArchivos", { indice: dv.current() });
```


### Bibliografía
---
```dataviewjs
await dv.view('_dataviewScripts/biblioIndice', { indice: dv.current() });
```