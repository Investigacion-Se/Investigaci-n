//  callback: (file: TAbstractFile, oldPath: string)
async function onRename(file, oldPath) {
    console.log(file);
    console.log(oldPath);

    if (esCarpeta(file)) {
        // Actualizar indice de esta carpeta


    } else {
        // Si es indice, si se cambio el nombre, entonces cambiar el nombre de la carpeta
        
    }
}

function esCarpeta(file) {
    return file.children;
}

module.exports = onRename;