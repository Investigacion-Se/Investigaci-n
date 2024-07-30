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
Una librería de Rust similar a [React](https://es.react.dev/). Basado en la serie:
* [Learn Yew.rs - Building Web Applications with Rust](https://youtube.com/playlist?list=PLrmY5pVcnuE_R5qJ0o30eGw77bWmnrUtL&si=JYbN_Dv0Y_39UqRf)


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