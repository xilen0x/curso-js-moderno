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

/* Accediendo al detalle del producto */

console.log(producto.detalle);

console.log(producto.detalle.peso);