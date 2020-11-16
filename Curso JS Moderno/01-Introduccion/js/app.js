const nombre = prompt("Cual es tu nombre?");
console.log(nombre);

document.querySelector(".contenido").innerHTML = `Bienvenido ${nombre}`;