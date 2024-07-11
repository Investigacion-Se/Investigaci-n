---
dia: 2024-07-08
tags:
  - Índice
tema: Modelado
nivel: 1
superTema: Blender
---
```dataviewjs
await dv.view("_scripts/dataview/mostrarSuperTema", { superTema: dv.current().superTema });
await dv.view("_scripts/dataview/mostrarSubTemas", { subTemas: dv.current().subTemas });
```
### ¿Qué se va a investigar?
---
Para aprender modelado usando la herramienta de Blender, nos basáremos en el trabajo de:
* [polygonrunway](https://www.youtube.com/@polygonrunway)


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