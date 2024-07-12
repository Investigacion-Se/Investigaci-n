let { indice } = input;



if (subTemas.length > 0) {
    let texto = "Se tiene los siguientes subtemas:\n";
    subTemas = dv.pages("#Índice")
        .filter(archivo => subTemas.find(subTema => subTema == archivo.tema));

    texto += subTemas.map(subTema => {
        const path = subTema.file.path;
        return ` >  * ${subTema.tema} [[${path}|?]]`;
    }).join("\n");

    dv.paragraph(` > [!example]- Subtemas\n > ${texto}`);
}