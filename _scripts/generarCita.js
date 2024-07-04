async function generarCita(tp, numReferencia) {
    let tipoCita = tp.system.suggester(
        ["Citar youtube", "Citar Wikipedia", "Citar página web", "Citar libro"],
        ["Youtube", "Wikipedia", "Página web", "Libro"],
        true, "Qué tipo de cita es?"
    );

    return await tp.file.create_new(
        "Cita - Template", 
        `${numReferencia} - ${tipoCita}`,
        false,
        "_referencias"
    )
}

module.exports = generarCita;