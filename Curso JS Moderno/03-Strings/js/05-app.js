/* ---------------------------------------METODO REPLACE (REEMPLAZAR PALABRAS)-------------------------------------------------------*/

const producto = "monitor 20 pulgadas";

console.log("Replace:");
console.log(producto.replace('monitor', 'televisor'));

/* ---------------------------------------METODO SLICE (CORTAR)--------------------------------------------------*/
console.log("Slice:");
console.log(producto.slice(8));/* corta hasta el indice 8 */
console.log(producto.slice(0, 8));/* corta a partir del indice 0 hasta el 8 */
console.log(producto.slice(7, 10));/* corta a partir del indice 7 hasta el 10 */

/* ---------------------------------------METODO SUBSTRING (CORTAR)--------------------------------------------------*/
console.log("Substring: Hace lo mismo que Slice, pero si le entregas un n° mayor al inicio, trata de corregirlo invirtiéndolo");

console.log(producto.substring(10, 7));/* Lo corrige y corta a partir del indice 7 hasta el 10 */

