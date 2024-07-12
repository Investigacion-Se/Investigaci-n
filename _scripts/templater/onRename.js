// onRename(file: TAbstractFile, oldPath: string) => any
function onRename(file, oldPath) {
    console.log(file);
    console.log(oldPath);

    if (file instanceof TFolder) {
        onRenameFolder(file, oldPath);
    } else {
        onRenameFile(file, oldPath);
    }
}

/*
    * Cambio nombre de carpeta => Cambio nombre de tema indice, y sus carpetas para reflejarlo
    * Muevo carpeta => actualizo el nivel del indice y sus subtemas, y actualizo el superindice
*/
function onRenameFolder(folder, oldPath) {
    console.log("Cambio de nombre de carpeta");

    

}

/*
    * Cambio nombre del indice => actualizo el nombre del tema, el superindice, los subtemas y la carpeta
        * Archivos actualizan el tema y el indice para estar acorde con el nuevo nombre de la carpeta  
*/
function onRenameFile(file, oldPath) {
    console.log("Cambio de nombre de archivo");
    
    return;
    const dv = app.plugins.plugins["dataview"].api;
    const archivo = dv.page(file.path);
    
    let oldName = oldPath.split("/").pop();
    let cambiaNombre = file.name !== oldName;
    let esIndice = archivo.tags && archivo.tags.includes("Índice");

    console.log(file);
    console.log(oldPath);
    console.log(archivo);

    if (cambiaNombre && !esIndice) {
        return;
    }

    if (esIndice && cambiaNombre) {
        // Se cambia de nombre el tema
        // Modificar metadata y la de sus relativos (todos los que deberias ser afectados)
        console.log("Es indice y cambia nombre");

    } else if (esIndice && !cambiaNombre) {
        if (!file.parent || file.parent.isRoot() ) {}

        // Se cambia de posición el tema
        // Actualizar supertema viejo y nuevo
        // Actualizar nivel
        console.log("Es indice y no se cambia nombre");

    } else {
        // El archivo tiene que cambiar referencia y metadata de tema e indice
        console.log("Es un archivo normal, y se cambio el path");

    }
}

module.exports = onRename;