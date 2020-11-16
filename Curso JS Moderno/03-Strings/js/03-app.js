/* Formas de Concatenación */

let producto = 'TV 60"';
let precio = "500.000"


/* Forma uno */
console.log(producto.concat(precio));

/* Forma dos */
console.log("El valor del producto " + producto + " es " + precio + " pesos.");

/* Forma tres ES6 */
console.log(`El valor del producto ${producto} tiene un precio de ${precio}`);