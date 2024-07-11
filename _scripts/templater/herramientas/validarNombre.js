const caracteresInvalidos = ['*', '"', '\\', '/', '<', '>', ':', '|', '?'];

function validarNombre(nombre) {
    return !caracteresInvalidos.some(caracter => nombre.includes(caracter));
}

module.exports = validarNombre;