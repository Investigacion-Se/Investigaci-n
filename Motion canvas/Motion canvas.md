---
dia: 2024-07-08
tags: 
 - Índice
tema: Motion canvas
nivel: 0
---
```dataviewjs
await dv.view("_scripts/dataview/mostrarSuperTema", { superTema: dv.current().superTema });
await dv.view("_scripts/dataview/mostrarSubTemas", { subTemas: dv.current().subTemas });
```
### ¿Qué se va a investigar?
---
La librería de [Motion canvas](https://motioncanvas.io/) permite animar de forma programática, lo cual significa que podemos crear animaciones puramente a base de código. Esto es muy interesante, y quiero investigar como usarla y poder recrearla

Basándonos en la documentación oficial:
* [Motion Canvas Documentation](https://motioncanvas.io/docs/)


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