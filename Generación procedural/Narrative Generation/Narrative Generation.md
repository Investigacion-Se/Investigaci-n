---
dia: 2024-07-18
tags: 
 - Índice
---
```dataviewjs
await dv.view("_scripts/dataview/mostrarSuperTema", { indice: dv.current() });
await dv.view("_scripts/dataview/mostrarSubTemas", { indice: dv.current() });
```
### ¿Qué se va a investigar?
---
Vamos a investigar formas en las cuales se pueden usar herramientas de generación procedural para crear historias, basadas en las mejores prácticas enunciadas en el siguiente video
* [Best Practices for Procedural Narrative Generation](https://youtu.be/k2rgzZ2WXKo?si=7dgRzzXPkpvOmq5m)

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