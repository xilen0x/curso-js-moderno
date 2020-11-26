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

/* asignar un valor(existente) a una variable - forma tradicional */

const tipo = primerObjeto.compatible;
console.log(tipo)

/* asignar un valor(existente) a una variable - nueva forma es6 : Extrae el valor y crea la variable. Esto se llama "destructuring"*/
const { producto, compatible, precio } = primerObjeto;
console.log(compatible)
console.log(producto)
console.log(precio)