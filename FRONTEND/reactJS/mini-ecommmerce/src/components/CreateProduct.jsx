import axios from "axios";
import { useRef, useState } from "react";
import useStore from "../store";


export const CreateProduct = () => {

    // const titleRef = useRef();
    // const precioRef = useRef();

    // const [products, setProducts] = useState([]);

    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");

    const [loading, setLoading] = useState(false);
    const [loadingRegistro, setLoadingRegistro] = useState(false);

    const addProduct = useStore((state) => state.addProduct );


    // console.log("catalogo products:",products);


    const uploadImage = async (fileImage) => {
        console.log("uploading.....");
        return "https://media.api.com/file"
    }


    const saveProduct = async () => {


        setLoading(true);

        // const imageUrl = await uploadImage(fileImage);

        // console.log(titleRef.current.value);
        // console.log(precioRef.current.value);
        console.log(title);
        console.log(description);

        const payload = {
            "name": title,
            "description": description,
            "price": price,
            "image_url": image
        }

        axios.post("https://api.dojofullstack.com/api-demo/v1/product/", payload).then((res) => {
            
            // console.log(res.data);

            addProduct(res.data);
            setLoading(false);

            // console.log([...products, res.data ]);
            
            // setProducts( (products) => [ ...products, res.data ] );

        }).catch((error) => {
            setLoading(false);

            console.log(error);
        }).finally(() => {
            setLoading(false);
        })



        
    }


  return (
    <>
      <div className="flex flex-wrap">
        <button
          className="btn btn-primary"
          onClick={() => document.getElementById("my_modal_1").showModal()}
        >
          Crear Productos
        </button>

        <dialog id="my_modal_1" className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-2xl my-3">Agregar productos</h3>
            <div>

              <form className="flex flex-col  gap-5" onSubmit={(event) =>  event.preventDefault() }>
                <input
                //   ref={titleRef}
                  onChange={(e) => setTitle(e.target.value)}
                  value={title}
                  type="text"
                  placeholder="Titulo del producto"
                  className="input input-bordered input-primary w-full"
                />

                    <textarea
                    onChange={(e) => setDescription(e.target.value)}
                    value={description}
                    className="textarea textarea-primary" placeholder="Description"></textarea>

                <input
                    onChange={(e) => setPrice(e.target.value)}
                    value={price}
                    // ref={precioRef}
                  type="number"
                  placeholder="Precio"
                  className="input input-bordered input-primary w-full"
                />


                <input
                     onChange={(e) => setImage(e.target.value)}
                     value={image}
                  type="url"
                  placeholder="Imagen del producto"
                  className="input input-bordered input-primary w-full"
                />


                <button onClick={saveProduct} className="btn btn-accent text-lg">

                    {
                      !loading ? 
                      "Guardar":
                      <>
                       <span className="loading loading-spinner"></span>
                       Guardando
                      </>
                    }

                </button>

                
                
              </form>
            </div>

            <div className="modal-action">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn">Cerrar</button>
              </form>
            </div>
          </div>
        </dialog>
      </div>
    </>
  );
};
