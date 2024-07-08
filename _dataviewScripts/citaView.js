const referencias = app.vault.adapter.basePath + "/_dataviewScripts/referencias"

const libroView   = require(`${referencias}/libroView.js`);
const youtubeView = require(`${referencias}/youtubeView.js`);
const webView     = require(`${referencias}/webView.js`);
const wikiView    = require(`${referencias}/wikiView.js`);

function mostrarCita(archivo) {
    let tipoCita = archivo.tipoCita;

    const ref = `<p style="margin-right: 0.5em">[${archivo.numReferencia}]</p>`;

    let texto = "falta info";
    switch (tipoCita) {
        case "Libro": texto = libroView.mostrarCitaLibro(archivo); break;
        case "Youtube": texto = youtubeView.mostrarCitaYoutube(archivo); break;
        case "Web": texto = webView.mostrarCitaWeb(archivo); break;
        case "Wikipedia": texto = wikiView.mostrarCitaWiki(archivo); break;
    }

    const divStyle = "display:flex; flex-direction: row;";
    return `<div style="${divStyle}"> ${ref} ${texto} </div>`;
}

exports.mostrarCita = mostrarCita;



