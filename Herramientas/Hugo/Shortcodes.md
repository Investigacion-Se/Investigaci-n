---
dia: 2024-07-19
etapa: ampliar
referencias:
  - "174"
---
```dataviewjs
	await dv.view("_scripts/dataview/mostarEtapa", { etapa: dv.current().etapa });
```
### Definición
---
Los shortcodes en [[Hugo|Hugo]] son como función la cual le podes pasar parámetros, pero estas funciones devuelven código HTML para insertar en el contenido. Su sintaxis para llamarlas es
```
{{< nombre-shortcode param1 ... >}}
```

Hugo ya tiene muchos shortcode que se pueden encontrar en la [documentación](https://gohugo.io/templates/shortcode/) y la forma de crearlo es la siguiente


### Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/referenciasView", { archivo: dv.current() });
```