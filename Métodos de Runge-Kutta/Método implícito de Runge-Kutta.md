---
dia: 2024-07-08
etapa: terminado
tema: Métodos de Runge-Kutta
indice: "[[Métodos de Runge-Kutta/Métodos de Runge-Kutta.md|Métodos de Runge-Kutta]]"
referencias:
  - "64"
---
```dataviewjs
	await dv.view("_dataviewScripts/mostarEtapa", { etapa: dv.current().etapa });
```
### Definición
---
De la familia de [[Método de Runge-Kutta|métodos de Runge-Kutta]], se puede generalizar $$ y_{n + 1} = y_n + h ~ \sum_{i = 1}^{s} b_i, k_i $$ donde $$ k_i = f\left( x_n + c_i ~ h, y_n + h ~ \sum_{j = 1}^{s} a_{ij} k_j \right), ~ i = 1, \cdots, s $$

A diferencia con el [[Método de Runge-Kutta explicito|método explícito]], la [[Matriz|matriz]] $A = (a_{ij})$ no es [[Matriz triangular|triangular]], usando el [[Tablero de Butcher|tablero de Butcher]], se podría definir como 
$$ \begin{array}{c|c c c c}
c_1    & a_{11} & a_{12} & \cdots & a_{1s} \\
c_2    & a_{21} & a_{22} & \cdots & a_{2s} \\
\vdots & \vdots & \vdots & \ddots & \vdots \\
c_s    & a_{s1} & a_{s2} & \cdots & a_{ss} \\\hline
       & b_1    & b_2    & \cdots & b_s    \\
       & b_1^*  & b_2^*  & \cdots & b_s^*  \\
\end{array} 
~~ = ~~
\begin{array}{c | c}
	c & A \\\hline
	  & b^T 
\end{array}$$

Donde aparece los coeficientes $b_i^*$ por los [[Método adaptativo de Runge-Kutta|métodos adaptativos.]] 

#### Ejemplo
---
El [[Método trapezoidal|método trapezoidal]] ![[Método trapezoidal#Definición]]
tiene un tablero
$$ \begin{array}{c|c c }
0           & 0           & 0           \\
1           & \frac{1}{2} & \frac{1}{2} \\ \hline
            & \frac{1}{1} & \frac{1}{1} \\
            & 1           & 0           \\
\end{array} $$

El [[Método de Gauss-Legendre|método de Gauss-Legendre]] ![[Método de Gauss-Legendre#Definición]]
tiene un tablero
$$ \begin{array}{c|c c }
\frac{1}{2} - \frac{1}{6} ~ \sqrt{3} & 
	\frac{1}{4} & \frac{1}{4} - \frac{1}{6} ~ \sqrt{3} \\
\frac{1}{2} + \frac{1}{6} ~ \sqrt{3} & 
	\frac{1}{4} - \frac{1}{6} ~ \sqrt{3} & \frac{1}{4}\\ \hline
        & \frac{1}{2} & \frac{1}{2} \\
        & \frac{1}{2} + \frac{1}{2} ~ \sqrt{3} & \frac{1}{2} - \frac{1}{2} ~ \sqrt{3} \\
\end{array} $$




### Referencias
---
```dataviewjs
	await dv.view("_dataviewScripts/referenciasView", { archivo: dv.current() });
```