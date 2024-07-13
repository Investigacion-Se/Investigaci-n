---
dia: 2024-07-13
tags: 
 - Índice
---
```dataviewjs
await dv.view("_scripts/dataview/mostrarSuperTema", { indice: dv.current() });
await dv.view("_scripts/dataview/mostrarSubTemas", { indice: dv.current() });
```
### ¿Qué se va a investigar?
---
La generación de contenido usando limitaciones, permite obtener un resultado que sí o sí cumpla las limitaciones puestas, basándonos en el video
* [Procedural Generation using Constraint Satisfaction](https://youtu.be/gKNJKce1p8M?si=Ka5a-6Uku_bMwG-3)


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