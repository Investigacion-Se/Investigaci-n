---
dia: 2024-07-08
tags:
  - Índice
---
```dataviewjs
await dv.view("_scripts/dataview/mostrarSuperTema", { indice: dv.current() });
await dv.view("_scripts/dataview/mostrarSubTemas", { indice: dv.current() });
```
### ¿Qué se va a investigar?
---
Aprender sobre conceptos para poder escribir y contar historias de forma más interesante

Basándonos también en el video:
* [50 Lessons from ARCANE WRITERS](https://www.youtube.com/watch?v=dcjB2DU5MdU)


#### Archivos
---
```dataviewjs
await dv.view("_scripts/dataview/mostrarArchivos", { indice: dv.current() });
```


### Bibliografía
---
```dataviewjs
await dv.view('_scripts/dataview/biblioIndice', { indice: dv.current() });
```