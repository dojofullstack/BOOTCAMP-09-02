


// iteradores en JS






// for (let index = 0; index < pokemones.length; index++) {

//     console.log("iterando pokemones");
//     const element = pokemones[index];
//     console.log(element);

//     if (element === "charmander"){
//         console.log("evoliciona a Charizar!");
//     }
    
// }



// for (const element of pokemones) {
//     // const index = pokemones.indexOf(element);
//     // console.log(index);
    
// }


function evolucionarPokemon(pokemon, index){

    // continuar
    // const pokemonImg = document.querySelector("#pokemon")

    let evoluacion;

    if (pokemon === "pikachu"){
        evoluacion = "Raichu";

    } else if (pokemon === "Bulbasaur"){
        evoluacion  = "Ivysaur";
    } else if (pokemon === "charmander"){
        evoluacion  = "charizar";
    } else {
        evoluacion = "Desconocido";
    }
    
    console.log(`Orden: ${index} - El pokemon ${pokemon} evoluciona a ${evoluacion}`);

    return `Orden: ${index} - El pokemon ${pokemon} evoluciona a ${evoluacion}`;

}



// const salidaFunciona =  evolucionarPokemon("pikachu", 1);

// console.log(salidaFunciona);



const pokemones = [
    "pikachu",
    "Bulbasaur",
    "charmander",
    "diglipop",
    "smow"
]


// pokemones.forEach(evolucionarPokemon);



// const salidaFuncion  = pokemones.map(evolucionarPokemon);
// console.log(salidaFuncion);