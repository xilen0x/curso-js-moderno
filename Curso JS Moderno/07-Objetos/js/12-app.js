/* -------------------------------Trabajando con Object constructor -------------------------*/


/* Object literal */
const producto = {
    nombre: "carcasas",
    precio: 5000,
    color: "blanco",
    disponible: true
}


/* Object Constructor */
function Producto(nombre, precio, color) {
    this.nombre = nombre;
    this.precio = precio;
    this.disponible = true;
}

const samsung = new Producto('Samsung S6', 300000, 'black');
console.log(samsung);

const huawei = new Producto('Huawei 8', 350000, 'red');
console.log(huawei);