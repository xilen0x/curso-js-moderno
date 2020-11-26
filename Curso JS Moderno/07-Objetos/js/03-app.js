/* Objeto literal */

const primerObjeto = {
    producto: "carcasas",
    precio: 5000,
    color: "blanco",
    compatible: "I-Phone 5"
}

console.log(primerObjeto);

/* Accediendo al valor de una propiedad del objeto */
console.log(primerObjeto.producto)

console.log(primerObjeto.precio)

/* Añadir  nuevas propiedades al objeto*/

primerObjeto.imagen = "imagen.jpg";

/* Eliminar propiedades del objeto */

delete primerObjeto.color;