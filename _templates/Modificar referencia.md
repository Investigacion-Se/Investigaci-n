<%*	
const CREAR = 1;
const AGREGAR = 2;
const SACAR = 3;

const dv = app.plugins.plugins["dataview"].api;

let opciones = ["⊕ Crear referencia", "↶ Agregar referencia", "⊖ Sacar referencia"];
let valores = [CREAR, AGREGAR, SACAR];

try {
    let modificacion = await tp.system.suggester(opciones, valores, true, "¿Qué desea hacer?");;
    let tArchivo = tp.file.find_tfile(tp.file.path(true));

    if (modificacion == CREAR) {

        let numReferencia = tp.user.generarNumReferencia(dv);
        await tp.user.cita().generar(tp, numReferencia);
        await agregarReferencia(tArchivo, numReferencia);
        
    } else if (modificacion == AGREGAR) {

        let referencias = dv.pages('"_referencias"')
            .flatMap(referencia => {
                let desc = tp.user.cita().metadata(tp, referencia);
                if (!desc) {
                    console.log("El siguiente archivo tuvo un erro al describirse");
                    console.log(referencia);
                    return [];
                }
                return [ desc ];
            })
            .sort(ref => -ref.numReferencia);

        let opciones = referencias.map(ref => tp.user.cita().describir(ref));
        let valores = referencias.map(ref => ref.numReferencia);
        
        let numReferencia = await tp.system.suggester(opciones, valores,
            true, "Agregar una cita (si no hay nada que agregar, apretar ESC)", 13
        );

        await agregarReferencia(tArchivo, numReferencia);
    } else if (modificacion == SACAR) {

        let referenciasArchivo = dv.page(tArchivo.path).referencias;
        if (!referenciasArchivo)
            referenciasArchivo = [];
        
        referenciasArchivo = referenciasArchivo.map(ref =>  parseInt(ref, 10));
        
        let referencias = dv.pages('"_referencias"')
            .filter(ref => referenciasArchivo.indexOf(ref.numReferencia) >= 0)
            .flatMap(referencia => {
                let desc = tp.user.cita().metadata(tp, referencia);
                if (!desc) {
                    console.log("El siguiente archivo tuvo un erro al describirse");
                    console.log(referencia);
                    return [];
                }
                return [ desc ];
            })
            .sort(ref => -ref.numReferencia);

        let opciones = referencias.map(ref => tp.user.cita().describir(ref));
        let valores = referencias.map(ref => ref.numReferencia);
        
        let numReferencia = await tp.system.suggester(opciones, valores,
            true, "Sacar la cita (si no hay nada que sacar, apretar ESC)", 13
        );

        await sacarReferencia(tArchivo, numReferencia);
    }
} catch (e) {
    const mensaje = "Hubo un error al modificar la referencia";
    
    console.log(mensaje);
    console.log(e);
    new Notice(mensaje);
}

async function agregarReferencia(tArchivo, numReferencia) {
    await app.fileManager.processFrontMatter(tArchivo, (frontmatter) => {
        if (!frontmatter["referencias"]) {
            frontmatter["referencias"] = [ `${numReferencia}` ];
        } else {
            frontmatter["referencias"].push(`${numReferencia}`);
        }
    });
}

async function sacarReferencia(tArchivo, numReferencia) {
    await app.fileManager.processFrontMatter(tArchivo, (frontmatter) => {
        if (!frontmatter["referencias"]) {
            const mensaje = "No hay referencias en este archivo";
            console.log(mensaje);
            new Notice(mensaje);
        } else {
            let index = frontmatter["referencias"].indexOf(`${numReferencia}`);
            frontmatter["referencias"].splice(index, 1);
        }
    });
}

_%>