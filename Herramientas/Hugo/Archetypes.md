---
dia: 2024-07-19
etapa: ampliar
referencias:
  - "173"
---
```dataviewjs
	await dv.view("_scripts/dataview/mostarEtapa", { etapa: dv.current().etapa });
```
### Definición
---
Los archetypes son una plantilla que usa [[Herramientas/Hugo/Índice|Índice]] en el momento de crear un nuevo [[Single Page|archivo]] creado por el usuario. Si se llama `default.md`, este va a ser la plantilla que se usará para cualquier archivo si ningún otro archetype aplica. Si se quiere generar un especifico a un directorio, entonces su nombre debe ser el del directorio.



### Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/referenciasView", { archivo: dv.current() });
```