// onRename(file: TAbstractFile, oldPath: string) => any
function onRename(file, oldPath) {

    if (typeof(file) === "TFolder" || !file.parent || file.parent.isRoot()) {
        return;
    }    
    let oldName = oldPath.split("/").pop();

    let cambiaNombre = file.name !== oldName;


    const dv = app.plugins.plugins["dataview"].api;
    const archivo = dv.page(file.path);

    

    /*
    if file es archivo {
        hay que ver
         * Si el path actual, solo difiere en el nombre
         * Si es indice       
    }
    */
}

module.exports = onRename;