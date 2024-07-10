const { indice } = input;

let archivos = dv.pages(`"${indice.file.folder}" and -#Índice`)
    .filter(archivo => archivo.tema == indice.tema)
    .sort(archivo => {
        let referencias = archivo.referencias;
        if (!referencias || referencias.length == 0)
            return 0;

        referencias = referencias.map(ref => parseInt(ref, 10));
        let refMinimo = referencias[0];
        for (let i = 1; i < referencias.length; i++) {
            if (referencias[i] < refMinimo)
                refMinimo = referencias[i];
        }
        return refMinimo;
    });

dv.table(["Archivo", "Estado", "Referencia"], archivos.map(archivo => {
    let titulo = `${archivo.file.name} [[${archivo.file.path}|?]]`;
    let referencias = archivo.referencias;

    let textoReferencias = "Este archivo no tiene referencias";
    if (referencias && referencias.length > 0) {
        textoReferencias = referencias
            .map(referencia => `[${referencia}]`)
            .join(" ");
    }

    let etapa = archivo.etapa;
    let textoEtapa = "No esta empezado";
    switch (etapa) {
        case "empezado": textoEtapa = "Esta empezado"; break;
        case "ampliar": textoEtapa = "Necesita ampliarse"; break;
        case "terminado": textoEtapa = "Esta terminado"; break;
    }

    return [titulo, textoEtapa, textoReferencias];
}));