

// Javascript tipado dinamico

// string
// numerales
// booleanos
// array
// objetos



let auto = "auto tesla";
let moto = " \n  yamaha   \n siguiente parrago \n dede\n";



console.log( typeof auto);

console.log( typeof moto);



auto.includes("teslo");

auto.replace("tesla", "hyundi");

auto.replace("teslooo", "hyundi");

moto.trim()

auto.indexOf("tesla");


auto.toUpperCase();

let text = "How-are-you-doing-today?";
const myArray = text.split("-");
// console.log(myArray.join(" "));


// numerales

let precio = 35.5;
let puntaje = 10;
let contador = 0;


typeof precio;
typeof puntaje;


// operacions basicas

precio = precio + 3;
precio += 3;


precio = precio - 3;
precio -= 3;

precio = precio * 3;
precio *= 3;

precio = precio / 3;
precio /= 3;

// incremento o decremento
// contador++;
// contador--;

// ++contador;

console.log(contador);


// Tipo de booleanos

let isAdmin = true;
let isMemberFree = false;

typeof isAdmin;

// Boolean()


// array

const frutas = [
    "naranjas",
    "fresas",
    "manzands",
    "peras",
]

const verduras = [
    "sparrafgos",
    "espinacas",
    "tomates"
]

console.log(frutas.length);

frutas.push("mango");



// delete frutas[0];

// frutas.slice(0, 2);

// frutas.includes("fresas");

// frutas.concat(verduras);


// frutas.shift();
// frutas.pop();

// frutas.reverse()


// objetos

const autoDeportivo = {
    precio: 999,
    color: "azul",
    modelo: "tesla",
    kilometraje: 0,
    isNuevo: true,
    // acelerar: () => {
    //     console.log("acelerar auto");
    // },
    // frenar: () => {
    //     console.log("frenar auto");        
    // },
}


// autoDeportivo.color;

// agregar o actualizar propiedades
// autoDeportivo.aceleracion = "10 m/s";
autoDeportivo["aceleracion"] = "10 m/s";

autoDeportivo.precio = 770;

// delete autoDeportivo.color;


// autoDeportivo.acelerar();
// autoDeportivo.frenar();