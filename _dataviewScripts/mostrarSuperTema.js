let { superTema } = input;

let posiblesSupertema = dv.pages("#Índice")
    .filter(archivo => archivo.tema == superTema);

if (posiblesSupertema.length == 1) {
    const superTema = posiblesSupertema[0];
    dv.paragraph(`Se tiene como super Tema a ${superTema.tema} [[${superTema.file.path}|?]]`);
} else {
    dv.paragraph("Este es el tema principal");
}