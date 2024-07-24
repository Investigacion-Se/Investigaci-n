---
dia: 2024-07-24
tags: 
 - Índice
---
```dataviewjs
await dv.view("_scripts/dataview/mostrarSuperTema", { indice: dv.current() });
await dv.view("_scripts/dataview/mostrarSubTemas", { indice: dv.current() });
```
### ¿Qué se va a investigar?
---
Vamos a investigar toda la rama de los colores y como estas se pueden ver afectadas por nuestra percepción, basándonos en
* [Your Colors Suck (it's not your fault)](https://www.youtube.com/watch?v=fv-wlo8yVhk&t=2s "Your Colors Suck (it's not your fault)")
* [The Amazing Math behind Colors!](https://www.youtube.com/watch?v=gnUYoQ1pwes "The Amazing Math behind Colors!")
* [The Color Temperature Paradox](https://www.youtube.com/watch?v=mqZm6u12RJA "The Color Temperature Paradox")


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