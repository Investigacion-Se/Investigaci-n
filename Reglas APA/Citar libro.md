---
dia: 2024-07-05
etapa: terminado
tema: Reglas APA
indice: "[[Reglas APA/index.md|Reglas APA]]"
referencias:
  - "6"
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
En esta entrada, detallaremos el proceso de citar y referenciar diversos tipos de fuentes, como libros, enciclopedias, diccionarios, monografías, tesis, entre otros. También abordaremos la citación de libros exclusivamente electrónicos y aquellos libros que, estando agotados, podrían encontrarse únicamente en repositorios en línea.

#### Formato general
---
* Libro impreso
	* Apellido, N. (año). Título del trabajo. Editorial.
	* Ejemplo
		* Herrera Cáceres, C. y Rosillo Peña, M. (2019). _Confort y eficiencia energética en el diseño de edificaciones_. Universidad del Valle.
	* Citar capítulo
		* Apellido, A. y Apellido, B. (año). Título del capítulo. En N. Apellido (Ed.), _Título del libro_ (pp. xx-xx). Editorial.
* Libro en línea
	* Apellido, N. y Apellido, N. (año). Título del libro. Editorial. [[Digital Object Identifier (DOI)|DOI]] o [[Uniform Resource Locator (URL)|URL]]
	* Ejemplo
		* Versión electrónica de la versión impresa
			* Herrera Cáceres, C. y Rosillo Peña, M. (2019). _Confort y eficiencia energética en el diseño de edificaciones_. Universidad del Valle. https://www.reddebibliotecas.org.co/
		* Disponible sólo en formato electrónico
			* Panza, M. (2019). _Números: elementos de matemáticas para filósofos._ Universidad Del Valle. https://www.reddebibliotecas.org.co/.
	* Citar capítulo
		* Apellido, A. y Apellido, B. (año). Título del capítulo. En N. Apellido y B. Apellido (Eds.), _Título del libro_ (pp. xx-xx). Editorial. DOI o URL
* Libro con editor
	* Apellido, N. (Ed.). (año). Título del trabajo. Editorial.
	* Citar capítulo
		* Apellido Autor, N. N. (año). Título del capítulo o entrada en N. Apellido Editor (Ed.), Título del libro (xx dc., Vol. xx, pp. xxx-xxx). Editorial
		* Ejemplo
			* Renteria Salazar, P. (2006). El comienzo de la renovación. En M. A. Flórez Góngora (Ed.), _Bogotá: Renovacion Urbana, Renovacion Humana_ (pp. 80-100). Empresa De Renovacion Urbana.
		* Si no tienes los números de página en el ejemplo anterior, el título del capítulo o de la entrada es suficiente. Si el libro no tiene número de edición o volumen, omitir esta información

##### Número de edición o volumen
---
Apellido Autor, N. N. (1994). _Título del trabajo._ ==(3ª ed., Vol. 4).== Editorial.



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