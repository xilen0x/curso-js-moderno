/* ---------------------------------------METODO REPEAT (REPITE N VECES LO INDICADO)-----------------------------------*/

const producto = "Monitor 20 pulgadas ";

const texto = 'PROMOCION!'.repeat(3);

console.log(producto + texto);

/* ----------------METODO SPLIT (DIVIDE UN STRING POR EL CARACTER INDICADO Y LO CONVIERTE A UN ARRAY)------------------*/

const actividad = "Estoy aprendiendo JavaScript moderno";
console.log(actividad.split(" ")); /* divide en cada espacio */
console.log(actividad.split("o")); /* divide en cada letra o que encuentra */