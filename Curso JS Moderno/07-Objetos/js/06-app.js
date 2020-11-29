/* Objeto anidado */

const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 50000,
    color: "negro",
    detalle: {
        peso: '20 kg',
        medidas: '22x20'
    }
}

console.log(producto);

/* Accediendo al nombre del producto con sintaxis es6*/

console.log(producto.nombre); /* forma tradicional */
const { nombre } = producto; /* forma es6 */
console.log(nombre);

/* Accediendo al peso del producto (dentro del detalle) con sintaxis es6*/
const { detalle: { peso } } = producto;
console.log(peso);