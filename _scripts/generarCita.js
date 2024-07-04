async function generarCita(tp, numReferencia) {
    let tipoCita = await tp.system.suggester(
        ["Citar youtube", "Citar Wikipedia", "Citar página web", "Citar libro"],
        ["Youtube", "Wikipedia", "Página web", "Libro"],
        true, "Qué tipo de cita es?"
    );

    let template = tp.file.find_tfile("Cita - Template");
    let carpeta = app.vault.getAbstractFileByPath("_referencias");

    return await tp.file.create_new(
        template, `${numReferencia} - ${tipoCita}`, false, carpeta
    )
}

module.exports = generarCita;