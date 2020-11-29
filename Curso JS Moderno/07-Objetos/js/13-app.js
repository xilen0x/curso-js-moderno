/* -------------------------------Trabajando con Object.keys -------------------------*/


/* Object.keys para obtener las llaves*/

const producto = {
    nombre: "carcasas",
    precio: 5000,
    color: "blanco",
    disponible: true
}

console.log(Object.keys(producto));

/* Object.values para obtener los valores*/
console.log(Object.values(producto));

/* Object.ventries para obtener las llaves y los valores*/
console.log(Object.entries(producto));