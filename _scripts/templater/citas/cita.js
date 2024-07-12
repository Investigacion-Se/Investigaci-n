const CITAS = [
    {
        tipo: "Libro",
        texto: "Citar Libro",
        f: (tp) => {
            return {
                describir: tp.user.libro().describir,
                citar: tp.user.libro().citar
            };
        }
    },
    {
        tipo: "Youtube",
        texto: "Citar Youtube",
        f: (tp) => {
            return {
                describir: tp.user.youtube().describir,
                citar: tp.user.youtube().citar
            };
        }
    },
    {
        tipo: "Web",
        texto: "Citar Página web",
        f: (tp) => {
            return {
                describir: tp.user.web().describir,
                citar: tp.user.web().citar
            };
        }
    },
    {
        tipo: "Wikipedia",
        texto: "Citar Wikipedia",
        f: (tp) => {
            return {
                describir: tp.user.wiki().describir,
                citar: tp.user.wiki().citar
            };
        }
    },
]

async function generarCita(tp, numReferencia) {
    let tipoCita = await tp.system.suggester(
        CITAS.map(cita => cita.texto),
        CITAS.map(cita => cita.tipo),
        true, "Qué tipo de cita es?"
    );

    let template = tp.file.find_tfile("Cita - Template");
    let carpeta = app.vault.getAbstractFileByPath("_referencias");

    return await tp.file.create_new(
        template, `${numReferencia} - ${tipoCita}`, false, carpeta
    )
}

function describirCita(tp, archivo) {
    let tipoCita = archivo.tipoCita;
    let numReferencia = archivo.numReferencia;
    let texto = CITAS.find(cita => cita.tipo === tipoCita)?.f(tp).describir(archivo);

    return (!texto) ? undefined : {
        archivo: archivo,
        tipoCita: tipoCita,
        numReferencia: numReferencia,
        texto: texto,
    }
}

function descripcionTexto(desc) {
    return `[${desc.numReferencia}] ${desc.texto}`;
}

async function citarCita(tp, tipoCita) {    
    let cita = CITAS.find(cita => cita.tipo === tipoCita);

    if (cita) {
        return cita.f(tp).citar(tp);
    } else {
        throw new Error(`El tipo de cita "${tipoCita}" no existe todavia`);
    }
}

module.exports = () => {
    return {
        generar: generarCita,
        metadata: describirCita,
        describir: descripcionTexto,
        citar: citarCita,
    };
}