// onRename(file: TAbstractFile, oldPath: string) => any
function onRename(file, oldPath) {
    console.log(`Se renombró`);
    console.log(file);
    console.log(oldPath);
}

module.exports = onRename;