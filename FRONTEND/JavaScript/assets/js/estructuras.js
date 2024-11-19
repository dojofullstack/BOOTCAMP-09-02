

// condicionales
let isAdmin = true;


if (isAdmin){
    console.log("Si es administrador!");
}




function validarPlan(){

    const btnComprar = document.querySelector("#btn-comprar");


    const optionsPlan = document.querySelector("#planes");
    console.log(optionsPlan.value);
    

    // if (optionsPlan.value.toLowerCase() === "free"){
    //     console.log("Mostrar componente Creditos!!");

    //     btnComprar.style.color = "orange";
    //     btnComprar.style.backgroundColor = "black";
    //     btnComprar.style.fontSize = "20px";
    // } else {
    //     btnComprar.style.color = "yello";
    //     btnComprar.style.backgroundColor = "blue";
    //     btnComprar.style.fontSize = "20px";
    // }



    if (optionsPlan.value.toLowerCase() === "free"){
        console.log("Mostrar componente Creditos!!");

        btnComprar.style.color = "orange";
        btnComprar.style.backgroundColor = "black";
        btnComprar.style.fontSize = "20px";
    } else if (optionsPlan.value.toLowerCase() === "premium")  {
        btnComprar.style.color = "yello";
        btnComprar.style.backgroundColor = "blue";
        btnComprar.style.fontSize = "20px";
    } else if (optionsPlan.value.toLowerCase() === "gold")  {
        btnComprar.style.color = "green";
        btnComprar.style.backgroundColor = "orange";
        btnComprar.style.fontSize = "20px";
    } else {

        btnComprar.style.color = "white";
        btnComprar.style.backgroundColor = "pink";
        btnComprar.style.fontSize = "15px";

    }


}





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




const salidaNaranjas = maquinaNaranjas(2, true);

console.log(salidaNaranjas);





