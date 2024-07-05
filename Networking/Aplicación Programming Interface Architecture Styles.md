---
dia: 2024-07-04
etapa: empezado
tema: Networking
referencias:
  - "1"
aliases:
  - API Architecture Styles
indice: "[[Networking/index|Networking]]"
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
Las [[Aplicación Programming Interface|API's]] son claves para el desarrollo de [[Software|software]]

#### SOAP
---


#### RESTful
---


#### GraphQL
---


#### gRPC
---


#### WebSocket
---


#### Webhook
---




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
```