---
dia: 2024-07-08
tags: 
 - Índice
tema: Yew
nivel: 0
---
```dataviewjs
await dv.view("_dataviewScripts/mostrarSuperTema", { superTema: dv.current().superTema });
await dv.view("_dataviewScripts/mostrarSubTemas", { subTemas: dv.current().subTemas });
```
### ¿Qué se va a investigar?
---
Una librería de Rust similar a [React](https://es.react.dev/). Basado en la serie:
* [Learn Yew.rs - Building Web Applications with Rust](https://youtube.com/playlist?list=PLrmY5pVcnuE_R5qJ0o30eGw77bWmnrUtL&si=JYbN_Dv0Y_39UqRf)


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