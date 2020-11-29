"use strict";

const producto = {
    nombre: "carcasas",
    precio: 5000,
    color: "blanco",
    compatible: "I-Phone 5"
}

/* Para que no se pueda editar el objeto, lo congelamos con Object.freeze(): */

Object.freeze(producto);

/* probamos modificarlo con la siguiente linea pero veremos que no es posible a menos q eliminemos freeze: */

producto.precio = 10000;

console.log(producto.precio);