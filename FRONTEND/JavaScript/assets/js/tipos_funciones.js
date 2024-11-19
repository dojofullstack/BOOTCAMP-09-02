
// funcion convencional
function maquinaNaranjas(numero_naranjas, miel){

    if (numero_naranjas > 3){
        console.log("No hay suficoinentes naranjas");
        return false; // aqui finaliza la maquina
    }

    console.log("inicando maquina de narajas");
    
    console.log("extrae el jugo de las narnajsa");

    
    if (miel){
        console.log("agregando una cucharita de miel");
    }

   return "El jugo de naranjas esta Listo!!!"

}



// funcion por expresion
const maquinaPalomitaMaiz = function (is_dulce, is_salado) {

    if (is_salado){
        return "palomotas listas con sal";
    } else if (is_dulce){
        return "palomotas listas con azucar";
    }

    return "palomotas listas con sal";
}




// const salida =  maquinaPalomitaMaiz(false, true);
// console.log(salida);


// arrow function

// const cambiarTema = () => {
//     console.log("cambiando tema del sitio web");
//     return "cambiando tema del sitio web"
// }

const cambiarTema = (color) => (
    `cambiando tema del sitio web a ${color}`.toLowerCase()
)


const salidaArrawFun = cambiarTema("naranja");
console.log(salidaArrawFun);
