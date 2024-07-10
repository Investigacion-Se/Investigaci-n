---
dia: 2024-07-08
tags: 
 - Índice
tema: Shaders
nivel: 0
---
```dataviewjs
await dv.view("_scripts/dataview/mostrarSuperTema", { superTema: dv.current().superTema });
await dv.view("_scripts/dataview/mostrarSubTemas", { subTemas: dv.current().subTemas });
```
### ¿Qué se va a investigar?
---
La idea es ver todo el proceso del renderizado, desde las meshes hasta los fragmentos. Basado en los trabajos vistos en
* [C# and Shader Tutorials](https://catlikecoding.com/unity/tutorials/)
* [Rastertek tutorials](https://www.rastertek.com/tutindex.html)
* [GPU Gems 1](https://developer.nvidia.com/gpugems/gpugems/contributors)
* [GPU Gems 2](https://developer.nvidia.com/gpugems/gpugems2/copyright)
* [GPU Gems 3](https://developer.nvidia.com/gpugems/gpugems3/contributors)


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