<%*	
const CREAR = 1;
const AGREGAR = 2;
const SACAR = 3;
const dv = this.app.plugins.plugins["dataview"].api;

let opciones = ["⊕ Crear referencia", "↶ Agregar referencia", "⊖ Sacar referencia"];
let valores = [CREAR, AGREGAR, SACAR];

try {
    let modificacion = await tp.system.suggester(opciones, valores, true, "¿Qué desea hacer?");;
    let tArchivo = tp.file.find_tfile(tp.file.path(true));

    if (modificacion == CREAR) {

        let numReferencia = tp.user.generarNumReferencia(dv);
        await tp.user.generarCita(tp, numReferencia);

        await app.fileManager.processFrontMatter(tArchivo, (frontmatter) => {
            if (!frontmatter["referencias"]) {
                frontmatter["referencias"] = [ `${numReferencia}` ];
            } else {
                frontmatter["referencias"].push(`${numReferencia}`);
            }
        });

    } else if (modificacion == AGREGAR) {
        


    } else if (modificacion == SACAR) {



    }
} catch (e) {
    const mensaje = "Hubo un error al modificar la referencia";
    
    console.log(mensaje);
    console.log(e);
    new Notice(mensaje);
}
_%>