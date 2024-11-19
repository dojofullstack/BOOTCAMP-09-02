

// try {

//     let username = "rosa";
//     console.log(`hola ${username}`);
    
// } catch (error) {
    
//     console.log(error);

//     console.log("error captuaddo, mostrar notificaionc");
//     alert("error detectado!");
    
// }


const procesarPago = (apiStripe, secretKey, amount, currency, sourceToken) => {
    console.log("conetcado al api de Stripe");
    console.log("conetcado al api de Stripe");
    // axios o fetch
    return false;
}



try {

    const apiStripe = "https://api.stripe.com/v1/charges";
    const secretKey = "sk_test_4eC39HqLyjWDarjtT1zdp7dc";
    const amount =  99;
    const currency= "usd";
    const sourceToken="eC39HqLyjWDarjtT1zd10290192010"


    const statusPay =  procesarPago(apiStripe, secretKey, amount, currency, sourceToken);

    if (statusPay){
        console.log("Pago exitoso, pronto recibiras el articulos");
    } else {
        console.log("Pago erroreo, intenta con otra tarjeta");
        throw "Pago erroreo, intenta con otra tarjeta"
    }

    
} catch (error) {
    
    console.log(error);

    console.log("error captuaddo, mostrar notificaionc");
    alert("error detectado!");
    
}