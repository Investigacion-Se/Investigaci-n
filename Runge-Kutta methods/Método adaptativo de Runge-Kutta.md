---
dia: 2024-02-17
biblio:
 - https://en.wikipedia.org/wiki/Runge%E2%80%93Kutta_methods#Adaptive_Runge%E2%80%93Kutta_methods
etapa: terminado
tema: "[[Runge-Kutta methods/Índice.md|Runge-Kutta methods]]"
---
### Definición
---
Los métodos adaptativos son diseñados para producir una estimación el [[Error de truncamiento|error de truncamiento local]] de un paso simple [[Método de Runge-Kutta|Runge-Kutta]]. Para conseguir esto, se necesita dos métodos, uno de orden $p$ y otro de $p - 1$.

Durante la integración, el paso se adapta, de tal forma que el error estimado sea menor que el deseado. En el caso que el error es más grande de lo deseado, se repite el paso de integración con un paso más chico, y si el error es suficientemente chico, podemos agrandar el paso.

Para el método de orden menor, se da con  $$ y_{n + 1}^* = y_n + h \cdot \sum_{i = 1}^s b_i^* \cdot k_i $$
Para calcular el error se usa $$ e_{n + 1} = y_{n + 1} - y_{n + 1}^* = y_n + h \cdot \sum_{i = 1}^s (b_i - b_i^*) \cdot k_i $$
Con al [[Tablero de Butcher|tabla]] de $$ \begin{array}{c|c c c c}
c_1    & a_{11} & a_{12} & \cdots & a_{1s} \\
c_2    & a_{21} & a_{22} & \cdots & a_{2s} \\
\vdots & \vdots & \vdots & \ddots & \vdots \\
c_s    & a_{s1} & a_{s2} & \cdots & a_{ss} \\\hline
       & b_1    & b_2    & \cdots & b_s    \\
       & b_1^*  & b_2^*  & \cdots & b_s^*  \\
\end{array} $$
#### Ejemplo
---
![[Método Runge-Kutta-Fehlberg#Definición]]

### Archivos
---
```dataviewjs 
const paginaActual = dv.current();
let archivos = dv.pages(`"${paginaActual.file.folder}" and -#Índice`)
	.where(pagina => pagina.file.path != paginaActual.file.path);

archivos = (archivos.length > 0) 
	? archivos.map(archivo => {
			let nombre = archivo.file.name;
			let path = archivo.file.path;
			return `[[${path}|${nombre}]]`;
		}) 
	: ["No hay más archivos"];

dv.list(archivos);	
```