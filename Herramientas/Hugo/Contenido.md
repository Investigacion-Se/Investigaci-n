---
dia: 2024-07-19
etapa: ampliar
referencias:
  - "171"
---
```dataviewjs
	await dv.view("_scripts/dataview/mostarEtapa", { etapa: dv.current().etapa });
```
### Definición
---
El contenido en [[Herramientas/Hugo/Índice|Índice]] se puede separar en 2 tipos de contenidos
* [[Single Page|Single Page]]
* [[List Page|List Page]]

También hay que notar que todo el contenido tiene [[Frontmatter|frontmatter o metadata]]


### Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/referenciasView", { archivo: dv.current() });
```