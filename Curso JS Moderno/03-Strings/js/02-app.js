const producto= 'monitor 23 pulgadas';

console.log(producto);

/* longitud */
console.log(producto.length)

/* El string incluye el texto...? */
console.log(producto.includes('hdhdhd'))
console.log(producto.includes('23'))

/* Indica la posición donde encuentra el texto, en este caso el 23 */
console.log(producto.indexOf('23'));

console.log(producto.indexOf('1000')); /* esto retorna un -1 pues no existe ese valor  */
