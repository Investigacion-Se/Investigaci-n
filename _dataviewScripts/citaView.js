const { archivo } = input

async function mostrarCita(archivo) {
    let tipoCita = archivo.tipoCita;
    input = { archivo: archivo };

    switch (tipoCita) {
        case "Libro": return dv.view("_scripts/libroView", input);
    }
}

await mostrarCita(archivo);