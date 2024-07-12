let { indice } = input;

let carpetaSuperTema = indice.file.folder.split("/");
carpetaSuperTema.pop();
carpetaSuperTema = carpetaSuperTema.join("/");

let posiblesSupertema = dv.pages(`"${carpetaSuperTema}" and #Índice`)
    .filter(ind => ind.file.folder == carpetaSuperTema);

if (posiblesSupertema.length == 1) {
    const superTema = posiblesSupertema[0];
    const texto = `Se tiene como super Tema a ${superTema.file.name} [[${superTema.file.path}|?]]`;
    dv.paragraph(` > [!tldr]- Supertema\n > ${texto}`);
}