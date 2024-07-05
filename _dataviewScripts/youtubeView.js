const { archivo } = input

const MESES = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

function mostrarCitaYoutube(archivo) {
    const numReferencia = archivo.numReferencia;
    const nombreCanal = archivo.nombreCanal;
    const nombreVideo = archivo.nombreVideo;
    console.log(archivo.fecha);
    const [dia, mes, anio] = moment(archivo.fecha)
        .format("D-MM-YYYY")
        .split("-");
    const url = archivo.url;

    let texto = `${nombreCanal} (${dia} de ${MESES[mes - 1]} del ${anio}). <em> ${nombreVideo} </em>. [Archivo de video]. Youtube. ${url}`;
    dv.el("p", `[${numReferencia}] ${texto}`);
}

mostrarCitaYoutube(archivo);