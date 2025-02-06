import { useEffect, useState } from "react";
import { Carousel } from "../components/Carousel";
import Footer from "../components/Footer";
import Header from "../components/Header";
import axios from "axios";
import { CreateProduct } from "../components/CreateProduct";
import useStore from "../store";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
// import Image from "next/image";



  

const Home = () => {

    const navigate = useNavigate();

    const {slugCategory} = useParams();

    const [params] = useSearchParams();    

    const [product, setProduct] = useState([]);
    const [nameStore, setNameStore ] = useState("Nike Store");
    const [logoStore, setLogoStore ] = useState("htttps://");

    console.log("Estado product", product);


    const catalogProduct = useStore((state) => state.catalogProduct );


    console.log("store de zustand", catalogProduct);

    console.log(params.get("productDetail"));
    console.log(params.get("userId"));

    console.log("slugCategory", slugCategory);
    
    
    

    

    const getProduct = () => {

        if (!product.length) {
            console.log("recuperando productos!");
            axios.get('https://api.dojofullstack.com/api-demo/v1/product/').then( (data) => {
                // console.log(data.data.results);
                setProduct(data.data.results);
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

            <CreateProduct/>


            <div className="flex flex-wrap">

            {
                product.length ? (
                    product.map((item, index) => (

                        <div key={index} className="card bg-base-100 w-96 shadow-xl cursor-pointer"
                        onClick={ () => {
                            navigate(`/product/${item.id}`);
                        }}
                        >
                            <figure>
                            <img
                                src={item.image_url}
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
                            <p className="text-lg text-primary">
                                {item.price}
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