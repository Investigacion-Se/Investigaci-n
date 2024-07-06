let libroView = require(app.vault.adapter.basePath + "/_dataviewScripts/libroView.js");
let youtubeView = require(app.vault.adapter.basePath + "/_dataviewScripts/youtubeView.js");
let webView = require(app.vault.adapter.basePath + "/_dataviewScripts/webView.js");

function mostrarCita(archivo) {
    let tipoCita = archivo.tipoCita;

    const ref = `<p style="margin-right: 0.5em">[${archivo.numReferencia}]</p>`;

    let texto = "falta info";
    switch (tipoCita) {
        case "Libro": texto = libroView.mostrarCitaLibro(archivo); break;
        case "Youtube": texto = youtubeView.mostrarCitaYoutube(archivo); break;
        case "Web": texto = webView.mostrarCitaWeb(archivo); break;
    }

    const divStyle = "display:flex; flex-direction: row;";
    return `<div style="${divStyle}"> ${ref} ${texto} </div>`;
}

exports.mostrarCita = mostrarCita;