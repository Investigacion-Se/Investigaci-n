const { indice } = input;

console.log(indice.file)
let archivos = dv.pages(`${indice.file.folder}/`)
    .filter(archivo => archivo.tema == indice.tema);

dv.table(["Archivo", "Referencia"], archivos.map(archivo => {
    let titulo = `${archivo.file.name} [[${archivo.file.path}|?]]`;
    let referencias = archivo.referencias;

    let textoReferencias = "Este archivo no tiene referencias";
    if (referencias && referencias.length > 0) {
        textoReferencias = referencias
            .map(referencia => `[${referencia}]`)
            .join(" ");
    }

    return [titulo, textoReferencias];
}));