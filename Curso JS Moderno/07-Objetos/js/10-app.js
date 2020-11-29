/* -------------------------------UNIR DOS OBJETOS ------------------------- Hay dos maneras: */

const producto = {
    nombre: "carcasas",
    precio: 5000,
    color: "blanco",
    compatible: "I-Phone 5"
}

const medidas = {
    peso: "1 kg",
    largo: "2 metros"
}

/* Método 1 con assign */
const resultado = Object.assign(producto, medidas);
console.log(resultado);


/* Método 2 con spread operator*/
const resultado2 = {...producto, ...medidas };
console.log(resultado2);