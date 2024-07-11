async function confirmacion(tp, mensaje) {
    try {
        return await tp.system.suggester(
            ["✓ Sí", "X No"],
            [true, false],
            true, mensaje
        );
    } catch (e) {
        const mensaje = "Se skippeo opciones, se asume que la negación";
        console.log(e);
        console.log(mensaje);
        new Notice(mensaje);
        return false;
    }
}

module.exports = confirmacion;