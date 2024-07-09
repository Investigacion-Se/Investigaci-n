---
dia: 2024-07-08
etapa: terminado
tema: Reglas APA
indice: "[[Reglas APA/Reglas APA.md|Reglas APA]]"
referencias:
  - "2"
---
```dataviewjs
	await dv.view("_dataviewScripts/mostarEtapa", { etapa: dv.current().etapa });
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
	await dv.view("_dataviewScripts/referenciasView", { archivo: dv.current() });
```