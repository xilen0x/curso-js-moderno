/*------------------------------------ ELIMINANDO ESPACIOS EN CADENAS ----------------------------------------------*/

const producto = "                   monitor 20 pulgadas                       ";

console.log(producto);
console.log(producto.length);

/* Eliminar espacios al inicio*/
console.log(producto.trimStart());

/* Eliminar espacios al final*/
console.log(producto.trimEnd());

/* Eliminar espacios al inicio y al final*/
console.log(producto.trimStart().trimEnd());

/* Eliminar espacios al inicio y al final (método antiguo pero aún usado)*/
console.log(producto.trim());