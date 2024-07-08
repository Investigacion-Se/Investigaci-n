function infoIndice(infoInvestigar, subTemas, superTema) {
    tR = "### Que se va a investigar\n---\n";
    if (infoInvestigar) {
        tR += infoInvestigar;
    } else {
        tR += "<% tp.file.cursor() %>\n\n\n\n";
    }

    if (superTema) {
        tR += "### Supertemas\n---\n";
        
    }

    if (subTemas) {
        tR += "### Subtemas\n---\n";
        
    }

    tR += "### Bibliografía\n";
    tR += "---\n";
    tR += "```dataviewjs\n";
	tR += "await dv.view('_dataviewScripts/biblioIndice', { indice: dv.current() });\n";
    tR += "```\n";

    return tR;
}

module.exports = infoIndice;