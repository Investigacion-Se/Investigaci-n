---
dia: 2024-07-08
tags:
  - Índice
tema: Distribuciones
nivel: 1
superTema: Generación procedural
---
```dataviewjs
await dv.view("_scripts/dataview/mostrarSuperTema", { superTema: dv.current().superTema });
await dv.view("_scripts/dataview/mostrarSubTemas", { subTemas: dv.current().subTemas });
```
### ¿Qué se va a investigar?
---
Se va a explorar la generación procedural a base del uso de [[Facultad/proba/Distribuciones/index|distribuciones]]


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