const MESES = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

function mostrarCita(archivo) {
    let tipoCita = archivo.tipoCita;

    const ref = `<p style="margin-right: 0.5em">[${archivo.numReferencia}]</p>`;

    let texto = "falta info";
    switch (tipoCita) {
        case "Libro": texto = mostrarCitaLibro(archivo); break;
        case "Youtube": texto = mostrarCitaYoutube(archivo); break;
        case "Web": texto = mostrarCitaWeb(archivo); break;
    }

    const divStyle = "display:flex; flex-direction: row;";
    return `<div style="${divStyle}"> ${ref} ${texto} </div>`;
}

exports.mostrarCita = mostrarCita;

function mostrarCitaLibro(archivo) {
    return "Libro";
}

function mostrarCitaYoutube(archivo) {
    const nombreCanal = archivo.nombreCanal;
    const nombreVideo = archivo.nombreVideo;
    
    const dia = archivo.fecha.c.day;
    const mes = MESES[ archivo.fecha.c.month - 1 ];
    const anio = archivo.fecha.c.year;
    
    const url = archivo.url;

    return `<p>${nombreCanal} (${dia} de ${mes} del ${anio}). <i> ${nombreVideo} </i>. [Archivo de video]. Youtube. ${url}</p>`;
}

function mostrarCitaWeb(archivo) {
    const nombreAutores = archivo.nombreAutores;
    const tituloArticulo = archivo.tituloArticulo;
    const nombrePagina = archivo.nombrePagina;
    
    const fecha = archivo.fechaPublicacion.c;
    const dia = fecha.day;
    const mes = MESES[ fecha.month - 1 ];
    const anio = fecha.year;
    
    const url = archivo.url;
    
    let autores = "";
    for (let {autore: autore} of nombreAutores) {
        let [{nombre: nombre}, {apellido: apellido}] = autore;
        autores += `${apellido}, ${nombre[0]}.`;
    }

    return `${autores} (${dia} de ${mes} del ${anio}). <i>${tituloArticulo}</i>. ${nombrePagina}. ${url}`;
}