---
dia: 2024-07-08
tags:
  - Índice
aliases:
  - Procedural generation
---
```dataviewjs
await dv.view("_scripts/dataview/mostrarSuperTema", { indice: dv.current() });
await dv.view("_scripts/dataview/mostrarSubTemas", { indice: dv.current() });
```
### ¿Qué se va a investigar?
---
Métodos de generación de cualquier tipo de cosa, de forma procedural

Basado en la serie de videos
* [GDC - Procedural](https://youtube.com/playlist?list=PLVmb_qp6XRcy8e-Lgs5SHzZezk1VPMvVl&si=wYhTlmNZeaQhaH-z)


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