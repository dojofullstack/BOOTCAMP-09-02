


// libreria fetch (realizar solcitudes http)


// fetch('https://dummyjson.com/products').then((respuesta) => {
//     return respuesta.json();
// }).then((respuesta) => {
//     console.log(respuesta.products);

// }).catch((response) => {
//     alert("error en la peticion");
// })

// console.log(peticion);





// JSON.parse()
// JSON.stringify()

// const data = {
//     username: 'emilys',
//     password: 'emilyspass'
// }

// const payload = {
//     method: "POST",
//     headers: {'Content-Type': 'application/json'},
//     body:  JSON.stringify(data)
// }


// fetch('https://dummyjson.com/auth/login', payload).then((response) => {
//     return response.json()
// }).then((response) => {
//     console.log(response);
    
// })





// CON LA LIB AXIOS


axios.get("https://dummyjson.com/products").then((response) => {
    console.log(response.data)
 })





const payload = {
    username: 'emilys',
    password: 'emilyspass'
}

axios.post("https://dummyjson.com/auth/login", payload).then( (response) => {
    console.log(response.data);
} )






const ctx = document.querySelector('#myChart');


new Chart(ctx, {
    type: 'pie',
    data: {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [{
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });





  paypal.Buttons().render("body");
