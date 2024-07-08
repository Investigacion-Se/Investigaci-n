---
dia: 2024-07-08
tags:
  - Índice
tema: Generación procedural
nivel: 0
subTemas:
  - Generación procedural con Tiles
  - Generación procedural con Grammars
  - Generación procedural con Distribuciones
  - Generación procedural parametrizada
---
```dataviewjs
await dv.view("_dataviewScripts/mostrarSuperTema", { superTema: dv.current().superTema });
await dv.view("_dataviewScripts/mostrarSubTemas", { subTemas: dv.current().subTemas });
```
### ¿Qué se va a investigar?
---
Métodos de generación de cualquier tipo de cosa, de forma procedural


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