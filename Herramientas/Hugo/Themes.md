---
dia: 2024-07-19
etapa: ampliar
referencias:
  - "170"
---
```dataviewjs
	await dv.view("_scripts/dataview/mostarEtapa", { etapa: dv.current().etapa });
```
### Definición
---
Existen Hugo Themes pre existentes que se pueden descargar y usar si la necesidad de crear uno desde $0$ y se pueden encontrar en [Hugo Theme Page](https://themes.gohugo.io/). 

En el caso de descargar un theme, este se agrega en una carpeta dentro de la carpeta de `themes`.





### Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/referenciasView", { archivo: dv.current() });
```