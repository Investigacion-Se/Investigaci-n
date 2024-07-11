<%*
    const dv = app.plugins.plugins["dataview"].api;
    app.vault.on('rename', tp.user.onRename, { dv: dv });
_%>