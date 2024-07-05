---
dia: 2024-07-05
etapa: terminado
tema: Normas APA
indice: "[[Reglas APA/index|Reglas APA]]"
referencias:
  - "2"
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
Debes utilizar el estilo de cita de páginas web si no hay otra categoría de referencia que se ajuste más específicamente al tipo de trabajo que quieras citar.

* Página web con contenido estático
	* Apellido, A., Apellido, B., y Apellido, C. (20 de mayo de 2020). __Título del artículo de la página web__. Nombre del sitio web. https://url.com
* Página web con actualizaciones frecuentes
	* Apellido, A., Apellido, B., y Apellido, C. (20 de mayo de 2020). _Título __del artículo__ de la página web_. Nombre del sitio web. Recuperado el dia mes año de https://url.com
* Formato especial adentro de una página web
	* Apellido, A. (03 de agosto de 2020). _Título del archivo_ \[Archivo Excel\]. Nombre del sitio web. https://url.com


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