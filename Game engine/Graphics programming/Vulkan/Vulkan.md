---
dia: 2024-07-08
tags:
  - Índice
tema: Vulkan
nivel: 0
---
```dataviewjs
await dv.view("_scripts/dataview/mostrarSuperTema", { indice: dv.current() });
await dv.view("_scripts/dataview/mostrarSubTemas", { indice: dv.current() });
```
### ¿Qué se va a investigar?
---
Simplemente entender su funcionamiento, y poder tener un lugar donde encontrar como se hacen las cosas más simples

Basándonos en el contenido de:
* [Brendan Galea](https://www.youtube.com/@BrendanGalea)


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