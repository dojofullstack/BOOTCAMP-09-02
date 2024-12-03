

// cookies

// para mostrar las cookies
document.cookie;


const fechaActual = new Date();
const fechaActualNow = new Date();

const hora = new Date();

// timestamp representa 10m  
hora.setTime(1000*60*60*24);

// timestamp representa 5s  
// hora.setTime(1000*5);


// console.log(hora.getTime());

fechaActual.setTime( fechaActual.getTime() +  hora.getTime() );

// console.log(fechaActual);


// console.log("marketingUser=15;path=/;expires=" + fecha.toUTCString());


// para crear una cookie con fecha de expir.
document.cookie = "marketingInvitado=15;path=/;expires=" + fechaActual.toUTCString();


// para crear o actualizar una cookie temporal o por sesion.
document.cookie = "paisUsuario=Peru;path=/";



// document.cookie = "paisUsuario=;path=/"+;


document.cookie = `marketingInvitado=Mexico;path=/; expires=${fechaActualNow.toUTCString()}`;





// localStorage

const perfilAdmin = {
    nombre: "jose",
    activo: true,
    email: "jose@gmail.com",
    prefercnias: ["tech", "science"]
}

console.log(localStorage);

localStorage.setItem("perfil", "dojo");

// para trabajar con JSON
// JSON.parse()
// JSON.stringify()

const dataJson = JSON.stringify(perfilAdmin);

console.log(dataJson);

// para crear y actualizar
localStorage.setItem("perfilAdmin", dataJson);

const perfilAdminJson = localStorage.getItem("perfilAdmin");


const perfilAdminObj = JSON.parse(perfilAdminJson);

console.log(perfilAdminObj);


// localStorage.clear();

localStorage.removeItem("perfil");

