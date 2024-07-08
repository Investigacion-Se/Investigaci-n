---
dia: 2024-07-08
tags: 
 - Índice
tema: Game engine
nivel: 0
---
```dataviewjs
await dv.view("_dataviewScripts/mostrarSuperTema", { superTema: dv.current().superTema });
await dv.view("_dataviewScripts/mostrarSubTemas", { subTemas: dv.current().subTemas });
```
### ¿Qué se va a investigar?
---
Entender la estructura de un motor de juegos, para poder expandirla o modificarla. Vamos a basarnos en la serie de videos
* [Vulkan Game Engine Series Written in C](https://youtube.com/playlist?list=PLv8Ddw9K0JPg1BEO-RS-0MYs423cvLVtj&si=Qa-ZGZZu0nVC8gwr)


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