

// OR, AND Y NOT

// AND = &&
// OR = ||
// NEGACION = !

let planType = "Premium";
let isLogin = false;

if (planType === "Free" ||  isLogin){
    console.log("Welcome Invitado, recibe tu 10 creditos");
}



if (!isLogin){
    console.log("DEbes iniciar Sesion!");
}

if (!(planType === "Free")){
    console.log("Es Premium!");
}



