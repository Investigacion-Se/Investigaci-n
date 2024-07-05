const { archivo } = input

async function mostrarCita(archivo) {
    let tipoCita = archivo.tipoCita;
    input = { archivo: archivo };

    switch (tipoCita) {
        case "Libro": await dv.view("_dataviewScripts/libroView", input); break;
        case "Youtube": await dv.view("_dataviewScripts/youtubeView", input); break;
    }
}

await mostrarCita(archivo);