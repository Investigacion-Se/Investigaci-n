---
dia: 2023-07-14
biblio: [
	https://es.wikipedia.org/wiki/M%C3%A9todo_de_Runge-Kutta,
]
etapa: empezado
---
### Definición 
---
Los métodos de Runge-Kutta son conjunto de métodos iterativos para la aproximación de soluciones de [[Ecuación diferencial ordinaria|ecuaciones diferenciales ordinarias]], concretamente, del [[Problema de valor inicial|problema de valor inicial]] $$ y'(t) = f(t, y(t)) $$ una ecuación diferencial ordinaria, con $f: \Omega \subset \mathbb{R} \times \mathbb{R}^n \to \mathbb{R}^n$ donde $\Omega$ es el [[Conjunto abierto]], junto con la condición de que el valor inicial de $f$ sea $$ \left( t_0, y_0 \right) \in \Omega $$
Entonces el método de Runge-Kutta (de orden $s$) tiene la siguiente expresión, en su forma más general $$ y_{n + 1} = y_n + h \cdot \sum_{i = 1}^s b_i \cdot k_i $$ donde $h$ es el paso por iteración, o lo que es lo mismo, el incremento $\Delta t_n$ entre los sucesivos puntos $t_n$ y $t_{n + 1}$. Los coeficientes $k_i$ son términos de aproximación intermedios, evaluados en $f$ de manera local $$ k_i = f\left( t_n + h \cdot c_i, ~~ y_n + h \cdot \sum_{j = 1}^s a_{ij} \cdot k_j \right) ~~ i = 1, \cdots, s$$ con $a_{ij}$, $b_i$, $c_i$ coeficientes propios del esquema numérico elegido, dependiente de la [[Regla de cuadratura]] utilizada. Los esquemas Runge-Kutta pueden ser [[Método explícito|explícito]] o [[Método implícito|implícito]] dependiendo de las constantes $a_{ij}$ del esquema.




![[Runge-Kutta methods/Índice#Archivos]]