const MESES = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre"
];

function mostrarCitaWiki(archivo) {
    const nombreArticulo = archivo.nombreArticulo;

    const dia = archivo.fecha.c.day;
    const mes = MESES[ archivo.fecha.c.month - 1 ];
    const anio = archivo.fecha.c.year;
    
    const url = archivo.url;

    return `<p>${nombreArticulo}. (${dia} de ${mes} del ${anio}). En <i> Wikipedia </i>. ${url}</p>`;
}

exports.mostrarCitaWiki = mostrarCitaWiki;