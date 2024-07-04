---
dia: 2024-07-03
etapa: terminado
tema: 
referencias:
  - "1"
  - "2"
  - "3"
  - "4"
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







#### Referencias
---
```dataviewjs
let referenciasArchivo = dv.current().referencias;
if (!referenciasArchivo)
    referenciasArchivo = []; 

let referencias = dv.pages('"_referencias"')
    .filter(ref => refrerenciasArchivo.find(ref.numRerefencia));

for (let referencia of referencias) {
    await dv.view("_scripts/citaView", { archivo: referencia });
}
```