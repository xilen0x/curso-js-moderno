"use strict";

const producto = {
    nombre: "carcasas",
    precio: 5000,
    color: "blanco",
    compatible: "I-Phone 5"
}

/* Para que no se pueda editar el objeto con nuevas propiedades, lo sellamos con Object.seal(): */
/* La deferencia con Object.freeze, es que seal te permite modificar lo existente, pero no agregarle nuevas propiedades o eliminarlas, no así freeze que no permite nada*/
Object.freeze(producto);

/* probamos modificarlo con la siguinete linea pero veremos que no es posible a menos q eliminemos la linea 12: */

producto.precio = 10000;

console.log(producto.precio);