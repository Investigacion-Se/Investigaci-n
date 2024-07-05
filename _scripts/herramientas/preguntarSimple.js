async function preguntarSimple(tp, key, mensaje, errorInputIncorrecto) {
    let tR = "";

    try {
        let value = await tp.system.prompt(mensaje, null, true);
        tR += `${key}: ${value}\n`;
    } catch (_) {
        throw new Error(errorInputIncorrecto);
    }

    return tR;
}

module.exports = preguntarSimple;
