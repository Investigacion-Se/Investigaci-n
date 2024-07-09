---
dia: 2024-07-08
tags: 
 - Índice
tema: Integrator
nivel: 0
---
```dataviewjs
await dv.view("_dataviewScripts/mostrarSuperTema", { superTema: dv.current().superTema });
await dv.view("_dataviewScripts/mostrarSubTemas", { subTemas: dv.current().subTemas });
```
### ¿Qué se va a investigar?
---
En el mismo sentido que [[Métodos de Runge-Kutta|Runge-Kutta methods]] vamos a ver como resolver el [[Lagrangian mechanics|Lagrangian mechanics]] de forma numérica, con sistemas de corrección.


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