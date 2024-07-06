const MESES = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

function mostrarCitaYoutube(archivo) {
    const numReferencia = archivo.numReferencia;
    const nombreCanal = archivo.nombreCanal;
    const nombreVideo = archivo.nombreVideo;
    
    const dia = archivo.fecha.c.day;
    const mes = MESES[ archivo.fecha.c.month - 1 ];
    const anio = archivo.fecha.c.year;
    
    const url = archivo.url;

    const ref = `<p style="margin-right: 0.5em">[${numReferencia}]</p>`;
    const texto = `<p>${nombreCanal} (${dia} de ${mes} del ${anio}). <i> ${nombreVideo} </i>. [Archivo de video]. Youtube. ${url}</p>`;

    const divStyle = "display:flex; flex-direction: row;";
    return `<div style="${divStyle}"> ${ref} ${texto} </div>`;
}

exports.mostrarCitaYoutube = mostrarCitaYoutube;