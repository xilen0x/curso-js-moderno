/* -------------------------------Uso de THIS para referirse a una propiedad del mismo objeto -------------------------*/

const producto = {
    nombre: "carcasas",
    precio: 5000,
    color: "blanco",
    compatible: "I-Phone 5",
    mostrarInfo: function() {
        console.log(`El producto : ${this.nombre} tiene un precio de : ${this.precio}`);
    }
}

const producto2 = {
    nombre: "funda",
    precio: 1000,
    color: "negra",
    compatible: "I-Phone 6",
    mostrarInfo: function() {
        console.log(`El producto : ${this.nombre} tiene un precio de : ${this.precio}`);
    }
}

producto.mostrarInfo();
producto2.mostrarInfo();