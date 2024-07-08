function infoIndice(infoInvestigar, subTemas, superTema) {
    tR = "### Que se va a investigar\n---\n";
    if (infoInvestigar) {
        tR += infoInvestigar;
    } else {
        tR += "<% tp.file.cursor() %>\n\n\n\n";
    }

    if (superTema) {
        tR += "### Supertemas\n---\n";
        tR += `Se tiene como supertema a: [[${superTema.file.path}|${superTema.tema}]]\n`;
        tR += "\n\n";
    }

    if (subTemas && subTemas.length > 0) {
        tR += "### Subtemas\n---\n";
        for (let subTema of subTemas) {
            tR += ` * [[${subTema.file.path}|${subTema.tema}]]\n\n`;
        }
        tR += "\n\n";
    }

    tR += "### Bibliografía\n";
    tR += "---\n";
    tR += "```dataviewjs\n";
	tR += "await dv.view('_dataviewScripts/biblioIndice', { indice: dv.current() });\n";
    tR += "```\n";

    return tR;
}

module.exports = infoIndice;