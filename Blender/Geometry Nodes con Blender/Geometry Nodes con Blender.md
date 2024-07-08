---
dia: 2024-07-08
tags: 
 - Índice
tema: Geometry Nodes con Blender
nivel: 1
superTema: Blender
---
```dataviewjs
await dv.view("_dataviewScripts/mostrarSuperTema", { superTema: dv.current().superTema });
await dv.view("_dataviewScripts/mostrarSubTemas", { subTemas: dv.current().subTemas });
```
### ¿Qué se va a investigar?
---
Para aprender la herramienta de Blender que es Geometry Nodes, nos basáremos principalmente en el video:
* [Blender Geometry Nodes - Full Course](https://youtu.be/ZerJnivvBn4?si=fWfk6hblaYYN6LBZ)


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