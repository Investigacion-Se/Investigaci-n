---
dia: 2024-07-08
tags: 
 - Índice
tema: Fractales
nivel: 0
---
```dataviewjs
await dv.view("_scripts/dataview/mostrarSuperTema", { indice: dv.current() });
await dv.view("_scripts/dataview/mostrarSubTemas", { indice: dv.current() });
```
### ¿Qué se va a investigar?
---
La intención es investigar sobre fractales y como se pueden hacer pseudo-fractales, que yo defino como estructuras repetitivas dependientes de condiciones pueden producir variaciones repetitivas o no. 


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