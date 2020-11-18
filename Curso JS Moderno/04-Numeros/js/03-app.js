/* ----------------------------------------------REDONDEO DE NUMEROS--------------------------------------- */
/* Redondeo tradicional con Math.round() */
let resultado = Math.round(2.3);

console.log(resultado);

/* Redondeo hacia arriba con Math.ceil() */
let resultado2 = Math.ceil(2.3);

console.log(resultado2);

/* Redondeo hacia abajo con Math.floor() */
let resultado3 = Math.floor(2.3);

console.log(resultado3);

/* ----------------------------------------------OTROS CON MATH--------------------------------------- */

/*------------------------------ Raiz cuadrada */
let resultado4 = Math.sqrt(144);

console.log(resultado4);

/*------------------------------ Valor absoluto */
let resultado5 = Math.abs(-144);

console.log(resultado5);

/*------------------------------ Potencia */
let resultado6 = Math.pow(2, 3);

console.log(resultado6);

/*------------------------------ Valor mínimo y máximo*/
let resultado7 = Math.min(-12, 133, 21, -2, 33, 4, 5);
let resultado8 = Math.max(-12, 133, 21, -2, 33, 4, 5);

console.log(resultado7);
console.log(resultado8);

/*------------------------------ Número Random (Math.random() returns a random number between 0 (inclusive),  and 1 (exclusive):)*/
let resultado9 = Math.random();

console.log(resultado9);

/*------------------------------ Uso de Random con floor para que entregue un numero entero entre 0 y 9 en este ej.*/
let resultado10 = Math.floor(Math.random()*10);

console.log(resultado10);