---
dia: 2024-07-08
tags: 
 - Índice
tema: Modelado con Blender
nivel: 1
superTema: Blender
---
```dataviewjs
await dv.view("_dataviewScripts/mostrarSuperTema", { superTema: dv.current().superTema });
await dv.view("_dataviewScripts/mostrarSubTemas", { subTemas: dv.current().subTemas });
```
### ¿Qué se va a investigar?
---
Para aprender modelado usando la herramienta de Blender, nos basáremos en el trabajo de:
* [polygonrunway](https://www.youtube.com/@polygonrunway)


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