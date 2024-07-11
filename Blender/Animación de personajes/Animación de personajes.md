---
dia: 2024-07-08
tags:
  - Índice
tema: Animación de personajes
nivel: 1
superTema: Blender
---
```dataviewjs
await dv.view("_scripts/dataview/mostrarSuperTema", { superTema: dv.current().superTema });
await dv.view("_scripts/dataview/mostrarSubTemas", { subTemas: dv.current().subTemas });
```
### ¿Qué se va a investigar?
---
Para aprender como animar personajes usando la herramienta de Blender, nos basáremos en los trabajos de:
* [SouthernShotty](https://www.youtube.com/@SouthernShotty)
* [grabbitt](https://www.youtube.com/@grabbitt)


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