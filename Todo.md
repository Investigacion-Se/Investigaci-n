Acá voy a poner todos los archivos, y tener un lugar donde visualizar los archivos que tengo que hacer. Va a estar ordenado, primero como `sin-empezar`, `empezado`, `ampliar` y `terminado`

```dataviewjs
const orden = ["sin-empezar", "empezado", "ampliar", "terminado"];

function posicion_orden(pagina) {
	if (!pagina.file.frontmatter.etapa) return -1;
	const etapa = String(pagina.file.frontmatter.etapa);
	return orden.indexOf(etapa);
}

const paginas = dv.pages()
	.where(pagina => {
		if (!pagina.file.folder) return false;
		if (pagina.file.folder == "_templates") return false;
	
		return pagina.file.frontmatter.etapa;
	})
	.sort(pagina => {
		let index = posicion_orden(pagina);

		return index == -1 ? 4 : index;
	});

dv.table(["Archivo", "Etapa"], paginas
	.map(pagina => {
		const nombre = pagina.file.name;
		const path = String(pagina.file.path);
	
		const archivo = `[[${path}|${nombre}]]`;
	
		let etapa = "no-definida";
		if (pagina.file.frontmatter.etapa) {
			etapa = String(pagina.file.frontmatter.etapa);
		}
	
		return [archivo, etapa];
	})
);
```
