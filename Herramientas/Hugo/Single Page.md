---
dia: 2024-07-19
etapa: sin-empezar
referencias: 
 - "171"
---
```dataviewjs
	await dv.view("_scripts/dataview/mostarEtapa", { etapa: dv.current().etapa });
```
### Definición
---
Es el contenido que corresponde a lo que crea el usuario, y en general se muestra el contenido de estas páginas.



### Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/referenciasView", { archivo: dv.current() });
```