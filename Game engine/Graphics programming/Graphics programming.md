---
dia: 2024-07-08
tags:
  - Índice
---
```dataviewjs
await dv.view("_scripts/dataview/mostrarSuperTema", { indice: dv.current() });
await dv.view("_scripts/dataview/mostrarSubTemas", { indice: dv.current() });
```
### ¿Qué se va a investigar?
---
La idea es ver todo el proceso del renderizado, desde las meshes hasta los fragmentos. Basado en los trabajos vistos en
* [The most simple graphics possible. A journey to the gpu internals](https://youtu.be/bG7boRr-JKY?si=zD6k448Y-hVz1FBN)
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