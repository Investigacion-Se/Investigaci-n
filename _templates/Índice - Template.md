---
dia: 2024-07-03
tags:
  - Índice
---
### Que se va a investigar
---
<% tp.file.cursor() %>







### Bibliografía
---
```dataviewjs
const archivoActual = dv.current().file;
const carpeta = archivoActual.folder;

const referenciasDuplicadas = dv.pages(`"${carpeta}"`).file
	.filter(archivo => archivo.path !== archivoActual.path)
	.filter(archivo => archivo.folder === carpeta)
	.flatMap(archivo => {
		if (!archivo.frontmatter.referencias)
			return [];
		return archivo.frontmatter.referencias;
	})
	.sort(num => num);

const referencias = [... new Set(referenciasDuplicadas)];

for (let referencia of referencias) {
	dv.el("p", `[${referencia}] archivo`);
}
```