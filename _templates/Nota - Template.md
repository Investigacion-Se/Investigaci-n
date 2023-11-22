<%* 
	let titulo = tp.file.title;
	if (titulo.startsWith("Untitle")) {
		titulo = await tp.system.prompt("Nota de:");
		await tp.file.rename(titulo);
	}
	tR += "---";
%>
dia: <% tp.file.creation_date("YYYY-MM-DD") %>
<%* 
	let contador = 1;
	let link = await tp.system.prompt("Biblio: ");
	let referencias = "biblio: [\n\t" + link;
	while (link !== null && link !== "") {
		contador++;
		link = await tp.system.prompt("Biblio n°" + contador + ": ");
		if (link !== null && link !== "") 
		referencias += ",\n\t" + link;
	}
	tR += referencias + "\n]";
%>
<%* 
	let etapa = await tp.system.suggester(
		["Sin empezar", "Empezado", "Falta ampliar", "Terminado"], 
		["sin-empezar", "empezado", "ampliar", "terminado"]
	);
	tR += "etapa: " + etapa;
%>
<%* tR += "---"; %>




![[<% tp.file.folder() %>/Índice#Archivos]]