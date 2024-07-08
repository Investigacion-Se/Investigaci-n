---
dia: 2024-07-03
tags:
  - Índice
tema: Reglas APA
nivel: 0
subTemas: []
---
### ¿Qué se va a investigar?
---
Se va a investigar las reglas APA que se va a usar para citar cualquier contenido nuevo hecho en esta página


#### Super tema
---
```dataviewjs
await dv.view("_dataviewScripts/mostrarSuperTema", { superTema: dv.current().superTema });
```

#### Subtemas
---
```dataviewjs
await dv.view("_dataviewScripts/mostrarSubTemas", { subTemas: dv.current().subTemas });
```


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