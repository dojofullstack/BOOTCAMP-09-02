import { useEffect, useState } from "react";
import { Carousel } from "../components/Carousel";
import Footer from "../components/Footer";
import Header from "../components/Header";
import axios from "axios";



const Home = () => {
    const [product, setProduct] = useState([]);
    const [nameStore, setNameStore ] = useState("Nike Store");
    const [logoStore, setLogoStore ] = useState("htttps://");

    console.log("Estado product", product);
    

    const getProduct = () => {

        if (!product.length) {
            console.log("recuperando productos!");
            axios.get('https://dummyjson.com/products').then( (data) => {
                console.log(data.data);
                setProduct(data.data.products);
            })
        }

    }


    // useEffect(callback, [logoStore]);

    // useEffect(callback2, []);

    useEffect(getProduct, []);


    return (
        <>

        <Header/>


        <main>

          
            <Carousel/>


            <div className="flex flex-wrap">

            {
                product.length ? (
                    product.map((item, index) => (

                        <div key={index} className="card bg-base-100 w-96 shadow-xl">
                            <figure>
                            <img
                                src={item.images[0]}
                                alt="Shoes" />
                            </figure>
                            <div className="card-body">
                            <h2 className="card-title">
                                {item.title}
                                <div className="badge badge-secondary">NEW</div>
                            </h2>
                            <p>
                                {item.description}
                            </p>
                            <div className="card-actions justify-end">
                                <div className="badge badge-outline">Fashion</div>
                                <div className="badge badge-outline">Products</div>
                            </div>
                            </div>
                        </div>

                    ))
                ) : (
                    <>
                        <p>Cargando productos.....</p>
                    </>
                )
            }
            

            </div>


         


            


        </main>


        <Footer/>
          
        </>
    )
}



export default Home;