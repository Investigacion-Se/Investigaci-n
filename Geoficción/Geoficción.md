---
dia: 2024-07-08
tags: 
 - Índice
tema: Geoficción
nivel: 0
---
```dataviewjs
await dv.view("_dataviewScripts/mostrarSuperTema", { superTema: dv.current().superTema });
await dv.view("_dataviewScripts/mostrarSubTemas", { subTemas: dv.current().subTemas });
```
### ¿Qué se va a investigar?
---
La intención es tener un lugar para investigar como crear desde sistemas solares hasta la topología de un planeta, de esta forma poder implementarlo o tenerlo en cuenta en creación procedural del mismo

Basándonos en la serie
* [Worldbuilder's Log](https://youtube.com/playlist?list=PLduA6tsl3gyiX9fFJHi9qqq4RWx-dIcxO&si=JjqmY66BTYLc9klj)


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