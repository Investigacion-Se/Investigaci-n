//  callback: (file: TAbstractFile, oldPath: string)
async function onRename(file, oldPath) {
    const cambiaNombre = file.name != oldPath.split("/").pop();
    const esCarpeta = file.children;

    if (esCarpeta || oldPath.split("/").pop() == "index.md") {
        console.log(esCarpeta ? "Es carpeta" : "Es un archivo index");
        return;
    }

    if (!await esIndice(file)) {
        console.log("No es indice");
        return;
    }

    if (!file.parent || file.parent.isRoot()) {
        await app.vault.rename(file, oldPath);

        const mensaje = "El indice se movio al root, volviendo a su lugar anterior";
        console.log(mensaje);
        new Notice(mensaje);

        return;
    }

    let temaPadre = file.parent.path.split("/").pop();
    let temaActual = file.basename;

    if (temaPadre == temaActual) {
        console.log("Tiene el nombre correcto, no se tiene que hacer nada");
        return;
    }

    if (cambiaNombre) {
        // Cambio el nombre

        let pathNuevo = file.parent.path.split("/");
        pathNuevo.pop();
        pathNuevo.push(temaActual);
        pathNuevo = pathNuevo.join("/");

        try {
            await app.vault.rename(file.parent, pathNuevo);
        } catch (_) {
            // El archivo ya existe, entonces volvemos para atras
            await app.vault.rename(file, oldPath);

            const mensaje = "Ya existe ese tema, vamos a volver para atras";
            console.log(mensaje);
            new Notice(mensaje);
        }

    } else {
        // Cambio el path

        if (await cantidadHijosIndice(file.parent) > 1) {
            // Ya existe un indice en ese lugar, entonces volvemos para atras
            await app.vault.rename(file, oldPath);

            const mensaje = "Ya existe un indice en ese lugar, entonces volvemos para atras";
            console.log(mensaje);
            new Notice(mensaje);
            
        } else {

            let pathNuevo = file.path.split("/");
            pathNuevo.pop();
            pathNuevo.push(`${temaPadre}.md`);
            pathNuevo = pathNuevo.join("/");
            
            await app.vault.rename(file, pathNuevo);
        }
    }
}

async function esIndice(file) {
    let temp = false;
    await app.fileManager.processFrontMatter(file, (frontmatter) => {  
        temp = frontmatter["tags"] && frontmatter["tags"].includes("Índice");
    });
    return temp;
}

async function cantidadHijosIndice(folder) {
    let hijos = folder.children;
    let cantidad = 0;
    for (let hijo of hijos) {
        if (await esIndice(hijo)) {
            cantidad++;
        }
    }
    return cantidad;
}

module.exports = onRename;