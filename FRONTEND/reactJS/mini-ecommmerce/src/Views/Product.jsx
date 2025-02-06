import { useParams } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useEffect, useState } from "react";
import axios from "axios";
import useStore from "../store";



const ProductDetail = () => {

    const addCartProduct =  useStore((state) => state.addCartProduct);
    const cart =  useStore((state) => state.cart);

    const {slugProduct} = useParams();

    const [productInfo, setProductInfo ] =  useState();

    // console.log(slugProduct);
    
    // console.log(productInfo);

    // console.log(addCartProduct);
    console.log(cart);
    


    useEffect( () => {

        axios.get(`https://api.dojofullstack.com/api-demo/v1/product/${slugProduct}`).then((res) => {
            // console.log(res.data);
            setProductInfo(res.data);
        });

    }, [])
    


  return (
    <>
      <Header />

      <div className="flex p-8 bg-white">
        <div className="flex flex-col mr-10 w-1/2">
          <img src={productInfo?.image_url} alt="Nike Cortez" className="mb-2" />
          <div className="grid grid-cols-2 gap-2">
            <img src={productInfo?.image_url}  alt="Nike Cortez" />
            <img src={productInfo?.image_url} alt="Nike Cortez" />
          </div>
        </div>
        <div className="flex-1">
          <h1 className="text-2xl font-bold mb-2">
            {productInfo?.name}
          </h1>
          <p className="text-lg text-gray-700 mb-4">
          {productInfo?.description}
          </p>
          <p className="text-xl font-semibold mb-4 text-primary">
            <span>US$</span> {productInfo?.price}
          </p>

          <div className="mb-4">
            <span className="block mb-2">Selecciona tu talla</span>
            <select className="border border-gray-300 p-2 rounded">
              <option>5.5</option>
              <option>6</option>
              <option>6.5</option>
              <option>7</option>
              <option>7.5</option>
              <option>8</option>
              <option>8.5</option>
            </select>
          </div>

          <div className="flex mb-4">
            <button className="text-lg btn btn-primary text-white py-2 px-4 rounded mr-2"
              onClick={() => addCartProduct(productInfo)}
            >
              Agregar al Carrito
            </button>
            <button className="border border-gray-400 text-gray-700 py-2 px-4 rounded">
              Favoritos ❤️
            </button>
          </div>

          <h2 className="text-lg font-semibold mb-2">
            Hazte Member y obtén delivery gratis⚡
          </h2>

          <p className="text-gray-600">
            Tú hablaste. Te escuchamos. Basándonos en tus comentarios, renovamos
            los Cortez originales manteniendo el encanto retro que tanto anhelas
            y te encanta. Ahora, con una puntera más amplia y paneles
            laterales...
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
};


export default ProductDetail;
