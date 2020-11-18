/* -----------------------------------------TRABAJANDO CON MÉTODO NUMBER ---------------------------------*/

/* ----------------Number.parseInt convierte de texto a N° entero */
const numero1 = "20";

console.log(numero1);
console.log(typeof(numero1));

const n2 = Number.parseInt(numero1);
console.log(typeof(n2));


/* ----------------Number.parseFloat convierte de texto a N° flotante */
const numero3 = "20.2";

const n3 = Number.parseFloat(numero3);


/* ----------------Number.isInteger consulta si un n° es entero */
const numero4 = 68;

const n4 = Number.isInteger(numero4);
console.log(n4);