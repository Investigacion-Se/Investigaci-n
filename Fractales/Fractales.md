---
dia: 2024-07-08
tags: 
 - Índice
tema: Fractales
nivel: 0
---
```dataviewjs
await dv.view("_dataviewScripts/mostrarSuperTema", { superTema: dv.current().superTema });
await dv.view("_dataviewScripts/mostrarSubTemas", { subTemas: dv.current().subTemas });
```
### ¿Qué se va a investigar?
---
La intención es investigar sobre fractales y como se pueden hacer pseudo-fractales, que yo defino como estructuras repetitivas dependientes de condiciones pueden producir variaciones repetitivas o no. 


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