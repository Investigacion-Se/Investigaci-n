//  callback: (file: TAbstractFile, oldPath: string)
async function onRename(file, oldPath) {
    console.log(file);
    console.log(oldPath);

    const cambiaNombre = file.name != oldPath.split("/").pop();
    const esCarpeta = file.children;

    console.log(`Es carpeta: ${esCarpeta ? "si" : "no"}`);
    console.log(`Cambia nombre: ${cambiaNombre ? "si" : "no"}`);

    if (esCarpeta || oldPath.split("/").pop() == "index.md") {
        console.log(esCarpeta ? "Es carpeta" : "Es un archivo index");
        return;
    }

    if (!await esIndice(file)) {
        console.log("No es indice");
        return;
    }

    if (!file.parent || file.parent.isRoot()) {
        console.log("Se cambio el indice al root");
        try {
            await app.vault.rename(file, oldPath);
        } catch (e) {
            console.log(e);
            console.log("Se movio al root");
        }

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
        console.log("Cambiar el nombre de la carpeta");

        let pathNuevo = file.parent.path.split("/");
        pathNuevo.pop();
        pathNuevo.push(temaActual);
        pathNuevo = pathNuevo.join("/");

        try {
            await app.vault.rename(file.parent, pathNuevo);
        } catch (_) {
            // El archivo ya existe, entonces volvemos para atras
            try {
                await app.vault.rename(file, oldPath);
            } catch (e) {
                console.log(e);
                console.log("Ya existia, se vuelve como antes");
            }

            const mensaje = "Ya existe ese tema, vamos a volver para atras";
            console.log(mensaje);
            new Notice(mensaje);
        }

    } else {
        // Cambio el path
        console.log("Cambiar el nombre del archivo");

        if (file.parent.children.some(archivo => archivo.path != file.path && esIndice(archivo))) {
            // Ya existe un indice en ese lugar, entonces volvemos para atras
            try {
                await app.vault.rename(file, oldPath);
            } catch (e) {
                console.log(e);
                console.log("Existen varios indices");
                console.log(file.parent.children);
                console.log(file.parent.children.some(archivo => archivo.path != file.path));
                console.log(file.parent.children.some(archivo => esIndice(archivo)));
            }

            const mensaje = "Ya existe un indice en ese lugar, entonces volvemos para atras";
            console.log(mensaje);
            new Notice(mensaje);
            
        } else {

            let pathNuevo = file.path.split("/");
            pathNuevo.pop();
            pathNuevo.push(`${temaPadre}.md`);
            pathNuevo = pathNuevo.join("/");
            
            try {
                await app.vault.rename(file, pathNuevo);
            } catch (e) {
                console.log(e);
                console.log("Cambio path, nuevo path: " + pathNuevo);
            }
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

/*
async function onRename(file, oldPath) {
    console.log(file);
    console.log(oldPath);

    const dv = app.plugins.plugins.dataview.api;
    const cambiaNombre = file.name != oldPath.split("/").pop();
    const esCarpeta = file.children;

    console.log(`Es carpeta: ${esCarpeta ? "si" : "no"}`);
    console.log(`Cambia nombre: ${cambiaNombre ? "si" : "no"}`);

    if (esCarpeta && cambiaNombre) { 
        try {
            // Actualizar indice de esta carpeta
            console.log("Es carpeta y se cambio el nombre")

            let indices = dv.pages(`"${file.path}" and #Índice`)
                .filter(ind => ind.file.folder == oldPath);

            console.log(dv.pages(`"${file.path}" and #Índice`))
            console.log(indices);

            if (indices.length == 1 && indices[0].file.name != file.name) {
                console.log("Encontre el indice de esta carpeta y lo voy a modificar de:\n" + `${file.path}/${indices[0].file.name} a: ${file.path}/${file.name}`);

                let tIndice = app.vault.getAbstractFileByPath(`${file.path}/${indices[0].file.name}`);
                await app.vault.rename(tIndice, `${file.path}/${file.name}`);

            } else if (indices.length > 1) {
                const mensaje = "Existe más de un índice en esta carpeta";
                console.log(mensaje);
                new Notice(mensaje);
            }
        } catch (e) {
            console.log(e);
            console.log("Es carpeta y se cambio el nombre");
        }
    } else if (!esCarpeta && cambiaNombre && file.basename != "index") {
        try {
            // Si es indice, si se cambio el nombre, entonces cambiar el nombre de la carpeta
            console.log("Es un archivo y cambio de nombre");
            
            let carpeta = file.path.replace(`/${file.name}`, "");
            let indices = dv.pages(`"${carpeta}" and #Índice`)
                .filter(ind => ind.file.folder == carpeta);
                
                let indice = indices.find(ind => ind.file.name == file.basename);
                
            if (indice.tags && indice.tags.includes("Índice")) {
                console.log("El archivo es un índice");

                if (!file.parent || file.parent.isRoot()) {
                    // Movio el indice al root
                    await app.vault.rename(file, oldPath);

                    const mensaje = "El indice se movio al root";
                    console.log(mensjae);
                    new Notice(mensaje);
                    
                } else if (indices.length == 1) {
                    // Se cambia el nombre del indice, y es el unico que esta, en esta carpeta
                    console.log("Existe solo un indice y vamos a modificar la carpeta del padre");
                    
                    let nuevaCarpeta = carpeta.split("/");
                    nuevaCarpeta.pop();
                    nuevaCarpeta.push(file.basename);
                    nuevaCarpeta = nuevaCarpeta.join("/");
                    console.log(`El nuevo path de la carpeta va a ser: ${nuevaCarpeta}`);
                    
                    await app.vault.rename(file.parent, nuevaCarpeta);
                    
                } else if (indices.length > 1) {
                    // Se movio a una carpeta donde ya existe uno o varios indices (de alguna forma hay varios)
                    await app.vault.rename(file, oldPath);
                    
                    const mensaje = (indices.length > 2) 
                    ? "Hay más indices de lo que debería en la carpeta que se movió"
                    : "Ya exite un indice en esa carpeta";
                    
                    console.log(mensaje);
                    new Notice(mensaje);
                }
            }   
        } catch (e) {
            console.log(e);
            console.log("Es un archivo y cambio de nombre");
        }
    } else if (!esCarpeta && !cambiaNombre && file.basename != "index") {
        try {
            // Si es indice, si se cambio el nombre, entonces cambiar el nombre de la carpeta
            console.log("Es un archivo y se cambio el path");

            let carpeta = file.path.replace(`/${file.name}`, "");
            let indices = dv.pages(`"${carpeta}" and #Índice`)
                .filter(ind => ind.file.folder == carpeta);

            console.log(carpeta);
            console.log(dv.pages(`"${carpeta}" and #Índice`))
            console.log(indices);
            console.log(file.parent);

            let indice = indices.find(ind => ind.file.name == file.basename);

            if (indice.tags && indice.tags.includes("Índice")) {
                console.log("El archivo es un índice");

                if (!file.parent || file.parent.isRoot()) {
                    // Movio el indice al root
                    console.log("Se movio al root");

                    await app.vault.rename(file, oldPath);

                    const mensaje = "El indice se movio al root";
                    console.log(mensjae);
                    new Notice(mensaje);
                    
                } else if (indices.length == 1) {
                    
                } else if (indices.length > 1) {
                    // Se movio a una carpeta donde ya existe uno o varios indices (de alguna forma hay varios)
                    console.log("Mas de un indice");

                    await app.vault.rename(file, oldPath);

                    const mensaje = (indices.length > 2) 
                        ? "Hay más indices de lo que debería en la carpeta que se movió"
                        : "Ya exite un indice en esa carpeta";
                    
                    console.log(mensaje);
                    new Notice(mensaje);
                }
            }
        } catch (e) {
            console.log(e);
            console.log("Es un archivo y se cambio el path");
        }
    }
}
 */

module.exports = onRename;