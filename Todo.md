Acá voy a poner todos los archivos, y tener un lugar donde visualizar los archivos que tengo que hacer. Va a estar ordenado, primero como `sin-empezar`, `empezado`, `ampliar` y `terminado`

```dataviewjs
const orden = ["terminado", "ampliar", "empezado", "sin-empezar"];
const orden_lindo = ["Terminado", "Ampliar", "Empezado", "Sin empezar"];

function posicion_orden(pagina) {
	if (!pagina.file.frontmatter.etapa) return -1;
	const etapa = String(pagina.file.frontmatter.etapa);
	return orden.indexOf(etapa);
}

const etapas = dv.pages()
	.where(pagina => {
		if (!pagina.file.folder) return false;
		if (pagina.file.folder.contains("_templates")) return false;
	
		return pagina.file.frontmatter.etapa;
	})
	.sort(pagina => {
		let index = posicion_orden(pagina);
		return index == -1 ? 4 : index;
	})
	.groupBy(pagina => {
		if (!pagina.file.folder) return "";
		return String(pagina.file.frontmatter.etapa);
	})

let lista = etapas
	.map(etapa => {
		let etapa_actual = etapa.rows[0].file.frontmatter.etapa;
		etapa_actual = orden_lindo[orden.indexOf(etapa_actual)];

		let cantidad = etapa.rows.length;

		return [etapa_actual, cantidad];
	}).values;

let total = 0;
for (let i in lista)
	total += lista[i][1];
	
lista.push(["Total", total]);

dv.table(["Etapa", "Cantidad"], lista);
```


```dataviewjs
const orden = ["sin-empezar", "empezado", "ampliar", "terminado"];

function posicionOrden(pagina) {
	if (!pagina.file.frontmatter.etapa)
		return -1;
	return orden.indexOf(String(pagina.etapa));
}

let temas = dv.pages("#Índice");

dv.table(["Archivo", "Tema", "Etapa"], temas.flatMap(tema => {
	let archivos = dv.pages(`"${tema.file.folder}"`)
		.where(archivo => archivo.file.path != tema.file.path)
		.sort(archivo => posicionOrden(archivo));

	let temaArchivo = `${tema.file.folder} [[${tema.file.path}|?]]`;

	return archivos.map(archivo => {
		let nombre = archivo.file.name;
		let path = archivo.file.path;
		let etapa = archivo.etapa;

		return [
			`${nombre} [[${path}|?]]`,
			temaArchivo,
			etapa
		]
	});
}));
```
