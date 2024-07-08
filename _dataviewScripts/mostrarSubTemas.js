let { subTemas } = input;

if (subTemas && subTemas.length > 0) {
    dv.paragraph("Se tiene los siguientes subtemas:");
    subTemas = dv.pages("#Índice")
        .filter(archivo => subTemas.find(subTema => subTema == archivo.tema));

    dv.list(subTemas.map(subTema => {
        const path = subTema.file.path;
        return `${subTema.tema} [[${path}|?]]`;
    }));
} else {
    dv.paragraph("No hay subtemas para mostrar");
}