async function preguntarArchivo(tp, indices, texto, otrasOpciones = [], otrosValores = []) {
    let descripcion = tp.user.describirTemas(indices);

    return await tp.system.suggester(
        otrasOpciones.concat(descripcion.map(desc => desc.descripcion)),
        otrosValores.concat(descripcion.map(desc => desc.archivo)),
        true, texto
    );
}

async function preguntarAutores(tp, key, mensajeNombre, mensajeApellido, errorNombre, errorApellido) {
    let tR = `${key}:\n`;

    let nombre = await preguntarSimple(tp, "", mensajeNombre, errorNombre);
    nombre = nombre.slice(2);
    let apellido = await preguntarSimple(tp, "", mensajeApellido, errorApellido);
    apellido = apellido.slice(2);

    tR += ` - autore:\n`;
    tR += `   - nombre: ${nombre}`;
    tR += `   - apellido: ${apellido}`;

    while (true) {
        try {
            let nombre = await preguntarSimple(tp, "", mensajeNombre, errorNombre);
            nombre = nombre.slice(2);
            let apellido = await preguntarSimple(tp, "", mensajeApellido, errorApellido);
            apellido = apellido.slice(2);
            
            tR += ` - autore:\n`;
            tR += `   - nombre: ${nombre}`;
            tR += `   - apellido: ${apellido}`;
        } catch (_) {
            break;
        }
    }    

    return tR;
}

async function preguntarFecha(tp, key, mensaje, errorFormatoIncorrecto, errorFechaIncorrecta) {
    let tR = "";

    try {
        let fechaVideoTexto = await tp.system.prompt(`${mensaje} (formato: DD/MM/YYYY)`, null, true);

        let fechaVideo = moment(fechaVideoTexto, "D/MM/YYYY");

        if (!fechaVideo.isValid()) {
            let formato = await tp.system.prompt(
                `Ingrese el formato para la fecha ${fechaVideoTexto}`,
            )

            fechaVideo = moment(fechaVideoTexto, formato);
            if (!(formato && fechaVideo.isValida())) {
                throw new Error(errorFormatoIncorrecto);
            }
        }

        tR += `${key}: ${fechaVideo.format("YYYY-MM-DD")}\n`;
    } catch (_) {
        throw new Error(errorFechaIncorrecta);
    }

    return tR;
}

async function preguntarSimple(tp, key, mensaje, errorInputIncorrecto) {
    let tR = "";

    try {
        let value = await tp.system.prompt(mensaje, null, true);
        tR += `${key}: "${value}"\n`;
    } catch (_) {
        throw new Error(errorInputIncorrecto);
    }

    return tR;
}

module.exports = () => {
    return {
        archivo: preguntarArchivo,
        autores: preguntarAutores,
        fecha: preguntarFecha,
        simple: preguntarSimple
    }
}