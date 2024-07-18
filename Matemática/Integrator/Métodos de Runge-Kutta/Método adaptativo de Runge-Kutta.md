---
dia: 2024-07-08
etapa: terminado
tema: Métodos de Runge-Kutta
indice: "[[Métodos de Runge-Kutta|Métodos de Runge-Kutta]]"
referencias:
  - "64"
---
```dataviewjs
	await dv.view("_scripts/dataview/mostarEtapa", { etapa: dv.current().etapa });
```
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


### Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/referenciasView", { archivo: dv.current() });
```