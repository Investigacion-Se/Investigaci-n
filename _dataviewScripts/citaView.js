let libroView = require(app.vault.adapter.basePath + "/_dataviewScripts/libroView.js");
let youtubeView = require(app.vault.adapter.basePath + "/_dataviewScripts/youtubeView.js");
let webView = require(app.vault.adapter.basePath + "/_dataviewScripts/webView.js");

function mostrarCita(archivo) {
    let tipoCita = archivo.tipoCita;

    switch (tipoCita) {
        case "Libro": return libroView.mostrarCitaLibro(archivo);
        case "Youtube": return youtubeView.mostrarCitaYoutube(archivo);
        case "Web": return webView.mostrarCitaWeb(archivo);
    }
}

exports.mostrarCita = mostrarCita;