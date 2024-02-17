---
dia: 2024-02-17
biblio:
  - https://repositorio.ual.es/bitstream/handle/10835/3513/2414_TFG_ALBACANOVAS.pdf?sequence=1&isAllowed=y
etapa: terminado
tema: "[[Runge-Kutta methods/Índice.md|Runge-Kutta methods]]"
---
### Definición
---
Es un tablero que sirve para representar los coeficientes del [[Método de Runge-Kutta|Método de Runge-Kutta]], es decir, para la formula $$ \begin{cases} 
	\displaystyle k_i = f\left( x_n + c_i ~ h, y_n + h ~ \sum_{j = 1}^{s} a_{ij} k_j \right) \\
	\displaystyle y_{n + 1} = y_n + h ~ \sum_{i = 1}^{s} b_i k_i
\end{cases} $$
Por lo que podemos representar estos coeficientes por medio de este tablero
$$ \begin{array}{c|c c c c}
c_1    & a_{11} & a_{12} & \cdots & a_{1s} \\
c_2    & a_{21} & a_{22} & \cdots & a_{2s} \\
\vdots & \vdots & \vdots & \ddots & \vdots \\
c_s    & a_{s1} & a_{s2} & \cdots & a_{ss} \\\hline
       & b_1    & b_2    & \cdots & b_s \\
\end{array} $$

Donde, si escribimos $c = (c_1, c_2, \cdots, c_s)^T$, $b = (b_1, b_2, \cdots, b_s)^T$, $A = (a_{ij})$, el tablero queda de la siguiente manera 
$$ \begin{array}{c | c}
	c & A \\\hline
	  & b^T 
\end{array} $$

Si $a_{ij} = 0$ para $j \ge i$, $i = 1, 2, \cdots, s$, es decir, si la [[Matriz|matriz]] $A$ es triangular inferior estricta, entonces cada uno de los $k_i$ viene dado explícitamente en términos de los anteriormente calculados $k_j$, $j = 1, 2, \cdots, i - 1$. En este caso, el [[Método de Runge-Kutta explicito|método es explícito]]. Al escribir su tablero se suele omitir los ceros sobre la diagonal principal y por encima de ella.

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