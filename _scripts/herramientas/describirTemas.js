function describirTema(indices) {
    let descripcion = [];

	if (indices.length > 0) {
		let temasOrdenados = ordenarTemas(indices);
		descripcion = generarDescripcion(temasOrdenados);
	}

    return descripcion;
}

module.exports = describirTema;

function ordenarTemas(indices) {
    let temas = indices
        .map(archivo => {
            return { 
                archivo: archivo, 
                nivel: archivo.nivel, 
                tema: archivo.tema, 
                superTema: archivo.superTema,
                subTemas: undefined
            }
        })
        .groupBy(data => data.nivel)
        .sort(grupo => grupo.key)
        .map(grupo => grupo.rows)
        .values;

    for (let i = temas.length - 1; i > 0; i--) {
        let archivosNivelI = temas[i];
        let archivosNivelIAnterior = temas[i - 1];

        let superTemas = archivosNivelI.groupBy(data => data.superTema);

        for (let archivoNivelIAnterior of archivosNivelIAnterior) {
            archivoNivelIAnterior.subTemas = superTemas.find(data => data.key === archivoNivelIAnterior.tema)?.rows;
        }
    }

    return temas[0];
}

/*
    ● Tema
    ├─○ Subtema
    │ └─○ Subsubtema
    ├─○ Subtema
    │ ├─○ Subsubtema
    │ ├─○ Subsubtema
    │ │ ├─○ Subsubtema
    │ │ ├─○ Subsubtema
    │ │ └─○ Subsubtema
    │ └─○ Subsubtema
    └─○ Subtema
    ● Tema
*/
function generarDescripcion(temas) {
    let guardarlo = [];
    
    for (let i = 0; i < temas.length; i++) {
        let data = temas[i];
        let descripcion = "";
        if (data.nivel == 0) { 
            descripcion = `● ${data.tema}`;
        } else {
            for (let i = 0; i < data.nivel - 1; i++) {
                descripcion += "└⇢ ";
            }
            descripcion += `└⇢ ○ ${data.tema}`;
        }
        guardarlo.push({ archivo: data.archivo, descripcion: descripcion });

        if (data.subTemas !== undefined) {
            let guardadoSiguienteNivel = generarDescripcion(data.subTemas, guardarlo);
            guardarlo = guardarlo.concat(guardadoSiguienteNivel);
        }
    }

    return guardarlo;
}