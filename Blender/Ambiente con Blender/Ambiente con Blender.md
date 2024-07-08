---
dia: 2024-07-08
tags: 
 - Índice
tema: Ambiente con Blender
nivel: 1
superTema: Blender
---
```dataviewjs
await dv.view("_dataviewScripts/mostrarSuperTema", { superTema: dv.current().superTema });
await dv.view("_dataviewScripts/mostrarSubTemas", { subTemas: dv.current().subTemas });
```
### ¿Qué se va a investigar?
---
Para aprender como crear ambientes usando la herramienta de Blender, nos basáremos en el trabajo de:
* [maxhayart](https://www.youtube.com/@maxhayart)


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