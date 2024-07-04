const { archivo } = input

async function mostrarCita(archivo) {
    let tipoCita = archivo.tipoCita;
    input = { archivo: archivo };

    switch (tipoCita) {
        case "Libro": return dv.view("_dataviewScripts/libroView", input);
        case "Youtube": return dv.view("_dataviewScripts/youtubeView", input);
    }
}

await mostrarCita(archivo);