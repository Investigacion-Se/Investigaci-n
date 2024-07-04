async function generarCita(tp, numReferencia) {
    let tipoCita = await tp.system.suggester(
        ["Citar youtube", "Citar Wikipedia", "Citar página web", "Citar libro"],
        ["Youtube", "Wikipedia", "Página web", "Libro"],
        true, "Qué tipo de cita es?"
    );

    return await tp.file.create_new(
        tp.file.find_tfile("Cita - Template") 
        `${numReferencia} - ${tipoCita}`,
        true,
        app.vault.getAbstractFileByPath("_referencias")
    )
}

module.exports = generarCita;