---
dia: 2024-07-19
etapa: sin-empezar
referencias:
  - "172"
aliases:
  - Metadata
---
```dataviewjs
	await dv.view("_scripts/dataview/mostarEtapa", { etapa: dv.current().etapa });
```
### Definición
---
Es información sobre nuestro contenido, que se suele escribir en uno de estos 3 "lenguajes":
* YAML
* TOML
* JSON



### Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/referenciasView", { archivo: dv.current() });
```