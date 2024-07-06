const MESES = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

function mostrarCitaWeb(archivo) {
    const numReferencia = archivo.numReferencia;
    const nombreAutores = archivo.nombreAutores;
    const tituloArticulo = archivo.tituloArticulo;
    const nombrePagina = archivo.nombrePagina;
    
    const fecha = archivo.fechaPublicacion.c;
    const dia = fecha.day;
    const mes = MESES[ fecha.month - 1 ];
    const anio = fecha.year;
    
    const url = archivo.url;

    const ref = `<p style="margin-right: 0.5em">[${numReferencia}]</p>`;
    
    let autores = "";
    for (let {autore: autore} of nombreAutores) {
        let [{nombre: nombre}, {apellido: apellido}] = autore;
        autores += `${apellido}, ${nombre[0]}.`;
    }

    const texto = `${autores} (${dia} de ${mes} del ${anio}). <i>${tituloArticulo}</i>. ${nombrePagina}. ${url}`;

    const divStyle = "display:flex; flex-direction: row;";
    return `<div style="${divStyle}"> ${ref} <p> ${texto} </p> </div>`;
}

exports.mostrarCitaWeb = mostrarCitaWeb;