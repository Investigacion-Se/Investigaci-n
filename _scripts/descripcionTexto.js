function descripcionTexto(desc) {
    return `[${desc.numReferencia}] ${desc.nombreObra} de ${nombreObra}, ${desc.extra}`;
}

module.exports = { descripcionTexto };