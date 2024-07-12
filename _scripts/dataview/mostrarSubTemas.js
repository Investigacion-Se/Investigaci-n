let { indice } = input;

let subTemas = dv.pages(`"${indice.file.folder}" and #índice`)
    .filter(ind => {
        if (ind.file.name == indice.file.name) 
            return false;
        return ind.file.folder.replace(`${indice.file.folder}/`, "").split("/")[0] == ind.file.name;
    });

if (subTemas.length > 0) {
    let texto = "Se tiene los siguientes subtemas:\n";

    texto += subTemas.map(subTema => {
        const path = subTema.file.path;
        return ` >  * ${subTema.file.name} [[${path}|?]]`;
    }).join("\n");

    dv.paragraph(` > [!example]- Subtemas\n > ${texto}`);
}