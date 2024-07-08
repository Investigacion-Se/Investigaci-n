---
dia: 2024-07-08
tags: 
 - Índice
tema: Motion graphics con Blender
nivel: 1
superTema: Blender
---
```dataviewjs
await dv.view("_dataviewScripts/mostrarSuperTema", { superTema: dv.current().superTema });
await dv.view("_dataviewScripts/mostrarSubTemas", { subTemas: dv.current().subTemas });
```
### ¿Qué se va a investigar?
---
Para aprender como animar personajes usando la herramienta de Blender, nos basáremos en los trabajos de:
* [DerekElliott](https://www.youtube.com/@DerekElliott)
* [TheDucky3D](https://www.youtube.com/@TheDucky3D)


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