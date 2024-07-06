function descripcionTexto(desc) {
    let extra = "";
    if (desc.extra) {
        extra = `, ${desc.extra}`;
    }

    return `[${desc.numReferencia}] ${desc.nombreObra} de ${desc.nombreAutor}${extra}`;
}

module.exports = descripcionTexto;