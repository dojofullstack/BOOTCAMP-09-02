import { useState } from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";


const FormularioLogin = () => {
    console.log("renderizando compoentente FromuLogin");

  const [precio, setPrecio] = useState(1);
  const [nombre, setNombre] = useState("pedro");

  return (
    <>
      <h1>Hola mi nombre es: {nombre} </h1>
      <h2>El precio actual es: {precio}</h2>

      <form action="">
        <input
          type="text"
          name=""
          id=""
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
        <input
          type="number"
          name=""
          id=""
          value={precio}
          onChange={(e) => setPrecio(e.target.value)}
        />
      </form>


    </>
  );
};



function Home() {

    console.log("renderizando compoentente Home");

  // creando 2 estados para este copmeontente Home
//   const [precio, setPrecio] = useState(1);
//   const [nombre, setNombre] = useState("pedro");

//   console.log(precio);
//   console.log(nombre);

  const data = {
    title: "blog de ovnis",
    image:
      "https://img.freepik.com/foto-gratis/pintura-nave-espacial-levantada-galaxia_123827-23492.jpg",
  };

  const data2 = {
    title: "blog de ovnis",
    image:
      "https://img.freepik.com/foto-gratis/pintura-nave-espacial-levantada-galaxia_123827-23492.jpg",
  };

  const buttonClick = () => {
    console.log("cambiando estados");

    setPrecio("$99 DOLARES");

    setNombre("Angel");
  };

  return (
    <>
      <Header props={data} props2={data2} />


      <FormularioLogin/>


      {/* <h1>Hola mi nombre es: {nombre} </h1>
      <h2>El precio actual es: {precio}</h2>

      <button onClick={buttonClick}>Cambiar estados</button> */}

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, libero!
      </p>



      <Footer />
    </>
  );
}

export default Home;
