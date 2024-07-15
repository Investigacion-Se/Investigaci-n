Esta va a ser una lista de todos los temas y sus estados, estos siendo `sin-empezar`, `empezado`, `ampliar` y `terminado`


```dataviewjs
const SIN_EMPEZAR = "sin-empezar";
const EMPEZADO = "empezado";
const AMPLIAR = "ampliar";
const TERMINADO = "terminado";
const DESCONOCIDO = "unknown";

function formatearEtapa(etapa) {
	let estapaModificada = etapa.replaceAll("-", " ");
	return `${estapaModificada.charAt(0).toUpperCase()}${estapaModificada.slice(1)}`;
}

function determinarEstado(tema) {
	let contenido = dv.pages(`"${tema.file.folder}"`)
		.where(pagina => pagina.file.path != tema.file.path).values;
	
	let etapas = [SIN_EMPEZAR, EMPEZADO, AMPLIAR, TERMINADO, DESCONOCIDO];
	let valorInicial = etapas.map(etapa => [0, etapa]);

	let resultado = contenido.reduce((acumulado, archivo) => {
		let index = etapas.indexOf(archivo.etapa);
		if (index < 0) {
			index = etapas.length - 1;
		}
		acumulado[index][0]++;
		
		return acumulado;
	}, valorInicial);

	if (!resultado || resultado.every(([cantidad, _]) => cantidad == 0)) {
		return formatearEtapa(SIN_EMPEZAR);
	}
	
	return resultado.flatMap(([cantidad, etapa]) => {
		let resultado = [];
		if (cantidad > 0) {
			resultado.push(`${cantidad} ${formatearEtapa(etapa)}`);
		}
		return resultado;
	}).join(", ");
}

const tag_indice = "Índice";
const temas = dv.pages(`#${tag_indice}`)
	.sort(tema => {
		return dv.pages(`"${tema.file.folder}"`)
			.where(pagina => pagina.file.path != tema.file.path)
			.length;
	});

dv.table(["Tema", "Etapa"], temas.map(tema => {
	let path = tema.file.path;
	let nombre = tema.file.name;
	let etapa = determinarEstado(tema);
	return [`${nombre} [[${path}|?]]`, etapa];
}));
```