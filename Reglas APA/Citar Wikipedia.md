---
dia: 2024-07-05
etapa: terminado
tema: Reglas APA
indice: "[[Reglas APA/index.md|Reglas APA]]"
referencias:
  - "21"
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
Uno de los grandes problemas de citar Wikipedia es la alta frecuencia de actualización de sus artículos. Wikipedia guarda copias de las versiones de cada entrada. Por lo tanto, idealmente, debemos intentar conseguir el enlace permanente de la versión a la cuál estamos accediendo, así ofrecemos a los lectores la versión que consultaremos al realizar la citación

* Cita narrativa
	* “Olimpíada de ajedrez de 1939” (2019)
* Cita en paréntesis
	* (“Olimpíada de ajedrez de 1939,” 2019)
* Referencia
	* Olimpíada de ajedrez de 1939. (23 de septiembre de 2019). En _Wikipedia_. https://es.wikipedia.org/w/index.php?title=Olimp%C3%ADada_de_ajedrez_de_1939&oldid=119643209



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