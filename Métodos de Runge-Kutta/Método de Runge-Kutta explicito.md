---
dia: 2024-07-08
etapa: terminado
tema: Métodos de Runge-Kutta
indice: "[[Métodos de Runge-Kutta/Métodos de Runge-Kutta.md|Métodos de Runge-Kutta]]"
referencias:
  - "64"
---
```dataviewjs
	await dv.view("_scripts/dataview/mostarEtapa", { etapa: dv.current().etapa });
```
### Definición
---
De la familia de [[Método de Runge-Kutta|métodos de Runge-Kutta]], se puede generalizar $$ y_{n + 1} = y_n + h ~ \sum_{i = 1}^{s} b_i, k_i $$ donde $$ \begin{cases} 
	k_1 &= f(t_n, ~ y_n), \\
	k_2 &= f(t_n + c_2 ~ c, ~ y_n + (a_{21} ~ k_1) ~ h ), \\
	& ~ \vdots \\
	k_s &= f(t_n + c_s ~ h, ~ y_n + (a_{s1} ~ k_1 + a_{s2} ~ k_2 + \cdots + a_{s, s-1} ~ k_{s - 1}) ~ h)
\end{cases} $$

Usando el [[Tablero de Butcher|tablero de Butcher]], se podría definir como 
$$ \begin{array}{c|c c c c c}
0      &  \\
c_2    & a_{21} \\
c_3    & a_{31} & a_{32} \\
\vdots & \vdots & \vdots & \ddots \\
c_s    & a_{s1} & a_{s2} & \cdots & a_{s, s-1} \\\hline
       & b_1    & b_2    & \cdots & b_{s - 1} & b_s \\
\end{array} $$

#### Ejemplo
---
El método de Runge-Kutta de Orden 4, tiene el tablero 
$$ \begin{array}{c|c c c c}
0           & \\
\frac{1}{2} & \frac{1}{2} \\
\frac{1}{2} & 0           & \frac{1}{2} \\
1           & 0           & 0            & 1          \\ \hline
            & \frac{1}{6} & \frac{1}{3} & \frac{1}{3} & \frac{1}{6}\\
\end{array} $$


### Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/referenciasView", { archivo: dv.current() });
```