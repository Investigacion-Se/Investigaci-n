---
dia: 2024-07-05
etapa: terminado
tema: Reglas APA
indice: "[[Reglas APA/index.md|Reglas APA]]"
referencias:
  - "17"
---
```dataviewjs
const archivoActual = dv.current();
const etapa = archivoActual.etapa;

let estadoCallout = "missing";
let texto = "Hubo un error, el estado todavia no se agregó";
switch (etapa) {
	case "sin-empezar": estadoCallout = "info"; 
		texto = "Esta nota todavía no se inició";
		break;
	case "empezado": estadoCallout = "help"; 
		texto = "Todavía no esta terminado, puede modificarse";
		break;
	case "ampliar": estadoCallout = "todo"; 
		texto = "Se puede ampliar el contenido";
		break;
	case "terminado": estadoCallout = "done"; 
		texto = "Esta nota esta completa";
		break;
}

dv.el("p", ` > [!${estadoCallout}]+ Estado de la nota\n > ${texto}`);
```
### Definición
---
Con las diferentes formas de información de hoy día, es posible que necesitemos referenciar o citar textos desde diferentes fuentes así como vídeos en YouTube.

La referencias de Youtube siguen el estándar de **quién** (autor, usuario de youtube), **cuándo** (fecha de publicación del vídeo), **qué** (título del vídeo) y **dónde** (URL del vídeo).

Nombre del autor. \[Nombre de usuario en Youtube\] (fecha). _Título del video_ \[Archivo de video\]. Youtube. http://youtube.com/url-del-video



### Referencias
---
```dataviewjs
let referenciasArchivo = dv.current().referencias;
if (!referenciasArchivo)
	referenciasArchivo = [];

referenciasArchivo = referenciasArchivo.map(ref =>  parseInt(ref, 10));

let referencias = dv.pages('"_referencias"')
	.filter(ref => referenciasArchivo.indexOf(ref.numReferencia) >= 0);

for (let referencia of referencias) {
	await dv.view("_dataviewScripts/citaView", { archivo: referencia });
}

if (referencias.length == 0){
	dv.el("p", "Actualmente no tiene referencias");
}
```