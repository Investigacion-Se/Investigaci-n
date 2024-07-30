---
dia: 2024-07-08
etapa: terminado
tema: Métodos de Runge-Kutta
indice: "[[Matemática/Integrator/Métodos de Runge-Kutta/Índice|Índice]]"
referencias:
  - "64"
---
```dataviewjs
	await dv.view("_scripts/dataview/mostarEtapa", { etapa: dv.current().etapa });
```
### Definición
---
El método Runge-Kutta-Fehlberg usa dos [[Método de Runge-Kutta|métodos de Runge-Kutta]] de orden 5 y 4. Donde tiene la tabla $$ \begin{array}{c | c c c c c c} 
	0             & \\
	\frac{1}{4}   &  \frac{1}{4}       & \\
	\frac{3}{8}   &  \frac{3}{32}      &  \frac{9}{32}      \\
	\frac{12}{13} &  \frac{1932}{2197} & -\frac{7200}{2197} & -\frac{7296}{2197} \\
	1             &  \frac{439}{216}   & -8                 &  \frac{3680}{513}   & 
		-\frac{845}{4104}  \\ 
	\frac{1}{2}   & -\frac{8}{27}      &  2                 & -\frac{3544}{2565}  & 
		 \frac{1859}{4104}   & -\frac{11}{40}  \\ \hline
                  &  \frac{16}{135}    &  0                 &  \frac{6656}{12825} & 
         \frac{28561}{56430} & -\frac{9}{50} & \frac{2}{55} \\
	              &  \frac{25}{216}    &  0                 &  \frac{1408}{2565}  &
	     \frac{2197}{4104}   & -\frac{1}{5}  & 0            \\
\end{array} $$



### Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/referenciasView", { archivo: dv.current() });
```