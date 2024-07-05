async function preguntarAutores(tp, key, mensajeNombre, mensajeApellido, errorNombre, errorApellido) {
    let tR = `${key}:\n`;

    let nombre = await tp.user
        .preguntarSimple(tp, "", mensajeNombre, errorNombre);
    nombre = nombre.slice(2);
    let apellido = await tp.user
        .preguntarSimple(tp, "", mensajeApellido, errorApellido);
    apellido = apellido.slice(2);

    tR += ` - autore:\n`;
    tR += `   - nombre: ${nombre}\n`;
    tR += `   - apellido: ${apellido}\n`;

    while (true) {
        try {
            let nombre = await tp.user
                .preguntarSimple(tp, "", mensajeNombre, errorNombre);
            nombre = nombre.slice(2);
            let apellido = await tp.user
                .preguntarSimple(tp, "", mensajeApellido, errorApellido);
            apellido = apellido.slice(2);
            
            tR += ` - autore:\n`;
            tR += `   - nombre: ${nombre}\n`;
            tR += `   - apellido: ${apellido}\n`;
        } catch (_) {
            break;
        }
    }    

    return tR;
}

module.exports = preguntarAutores;