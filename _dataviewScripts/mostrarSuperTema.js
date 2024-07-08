let { superTema } = input;

let posiblesSupertema = dv.pages("#Índice")
    .filter(archivo => archivo.tema == superTema);

if (posiblesSupertema.length == 1) {
    const superTema = posiblesSupertema[0];
    const texto = `Se tiene como super Tema a ${superTema.tema} [[${superTema.file.path}|?]]`;
    dv.paragraph(` > [!tldr]- Super tema\n > ${texto}`);
}

/*

dv.el("p", ` > [!${estadoCallout}]+ Estado de la nota\n > ${texto}`);
*/