---
dia: 2024-07-08
tags: 
 - Índice
tema: Bevy
nivel: 0
---
```dataviewjs
await dv.view("_dataviewScripts/mostrarSuperTema", { superTema: dv.current().superTema });
await dv.view("_dataviewScripts/mostrarSubTemas", { subTemas: dv.current().subTemas });
```
### ¿Qué se va a investigar?
---
Se busca entender como funciona la librería para crear juegos Bevy, basándonos en la serie
* [Learn Bevy Engine 0.10 Beginner Tutorial Series](https://youtube.com/playlist?list=PLVnntJRoP85JHGX7rGDu6LaF3fmDDbqyd&si=3uS8QaMgCM2ZuR5L)


#### Archivos
---
```dataviewjs
await dv.view("_dataviewScripts/mostrarArchivos", { indice: dv.current() });
```


### Bibliografía
---
```dataviewjs
await dv.view('_dataviewScripts/biblioIndice', { indice: dv.current() });
```