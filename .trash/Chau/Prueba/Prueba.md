---
dia: 2024-07-10
tags:
  - Índice
tema: Prueba
nivel: 1
superTema: Chau
---
```dataviewjs
await dv.view("_scripts/dataview/mostrarSuperTema", { superTema: dv.current().superTema });
await dv.view("_scripts/dataview/mostrarSubTemas", { subTemas: dv.current().subTemas });
```
### ¿Qué se va a investigar?
---



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