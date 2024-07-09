---
dia: 2024-07-08
tags: 
 - Índice
tema: Storytelling
nivel: 0
---
```dataviewjs
await dv.view("_dataviewScripts/mostrarSuperTema", { superTema: dv.current().superTema });
await dv.view("_dataviewScripts/mostrarSubTemas", { subTemas: dv.current().subTemas });
```
### ¿Qué se va a investigar?
---
Aprender sobre conceptos para poder escribir y contar historias de forma más interesante

Basándonos también en el video:
* [50 Lessons from ARCANE WRITERS](https://www.youtube.com/watch?v=dcjB2DU5MdU)


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