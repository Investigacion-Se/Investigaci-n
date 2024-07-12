// onRename(file: TAbstractFile, oldPath: string) => any
function onRename(file, oldPath) {

    if (typeof(file) === "TFolder" || !file.parent || file.parent.isRoot()) {
        return;
    }    
    
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
        

    } else if (esIndice && !cambiaNombre) {
        // Se cambia de posición el tema
        // Actualizar supertema viejo y nuevo
        // Actualizar nivel

    } else {
        // El archivo tiene que cambiar referencia y metadata de tema e indice
        

    }
}

module.exports = onRename;