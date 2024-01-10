Esta va a ser una lista de todos los temas y sus estados, estos siendo `sin-empezar`, `empezado`, `ampliar` y `terminado`



```dataviewjs
const SIN_EMPEZAR = "sin-empezar";
const EMPEZADO = "empezado";
const AMPLIAR = "ampliar";
const TERMINADO = "terminado";

const nombre_indice = "Índice";

function carpeta_no_empezada(carpeta) {
	return carpeta.rows.file.frontmatter.every(archivo => {
		return !archivo.etapa || archivo.etapa == SIN_EMPEZAR;
	});
}

function determinar_estado(carpeta) {
	if (carpeta_no_empezada(carpeta)) return SIN_EMPEZAR;

	const frontmatter = carpeta.rows.file.frontmatter;

	let esta_empezado = frontmatter.some(archivo => archivo.etapa == EMPEZADO);

	if (esta_empezado) return EMPEZADO; 

	let esta_terminado = frontmatter.every(archivo => {
		return !archivo.etapa || archivo.etapa == TERMINADO || archivo.etapa == AMPLIAR;
	});

	let necesita_ampliar = frontmatter.some(archivo => archivo.etapa == AMPLIAR);

	if (esta_terminado) 
		return necesita_ampliar ? AMPLIAR : TERMINADO;
	return SIN_EMPEZAR;
}

function determinar_nombre(carpeta) {
	const nombre = carpeta.rows[0].file.folder;
	let path = carpeta.rows[0].file.path;
	
	for (let archivo of carpeta.rows.file) {
		if (archivo.name == nombre_indice) {
			path = archivo.path;
		} 
	}

	return `${nombre} [[${path}|?]]`;
}

const carpetas = dv.pages()
	.where(pagina => {
		if (!pagina.file.folder) return false;
		return !(pagina.file.folder.contains("_templates"));
	})
	.groupBy(pagina => {
		if (!pagina.file.folder) return "";
		return String(pagina.file.folder);
	});

dv.table(["Carpeta", "Etapa"], carpetas
	.map(carpeta => {
		const nombre = determinar_nombre(carpeta);
		const etapa = determinar_estado(carpeta);

		return [nombre, etapa];
	})
);
```