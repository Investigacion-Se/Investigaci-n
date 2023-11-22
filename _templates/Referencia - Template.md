<%* tR += "---"; %>
dia: <% tp.file.creation_date("YYYY-MM-DD") %>
<%* 
	let contador = 1;
	let link = await tp.system.prompt("Biblio: ");
	let referencias = "biblio: [\n\t" + link;
	console.log("link: " + link);
	console.log("Texto de referencia: " + referencias);
	while (link !== null && link !== "") {
		contador++;
		link = await tp.system.prompt("Biblio n°" + contador + ": ");
		if (link !== null && link !== "") {
			referencias += ",\n\t" + link;
			console.log("no debería llegar acá");
		}

		console.log("link: " + link);
		console.log("Texto de referencia: " + referencias);
	}
	tR += referencias + "\n]";
%>
<%* tR += "---"; %>
### Definición
---