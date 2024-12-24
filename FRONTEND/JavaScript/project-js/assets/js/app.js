console.log("load module app.js");

// tienda virtual
/////////////
// - Proyecto Tienda Virtual (Auth)
// - LISTAR PRODUCTOS
// - CREADOR DE PRODCUTOS
// - EDITAR PRODCUTOS
// - ELIMINAR PRODUCTOS
// - BUSCADOR DE PRODUCTOS
// - AUTH DE USUARIOS
// - WEB DEPLOYMENT

const DATA_STORE = {
  isLogin: false,
  user: null,
  products: null,
  cart: [],
};

const listProduct = async () => {
  // axios.get('https://dummyjson.com/products').then( (response ) => {
  //     DATA_STORE.products =  response.data;
  // }).catch(
  //     (res) => console.log(res)
  //  )

  const response = await axios.get("https://dummyjson.com/products");
  DATA_STORE.products = response.data;
  // console.log(DATA_STORE.products);

  showProduct();
};



const showProduct = () => {
  // console.log(DATA_STORE);

  const cardProduct = DATA_STORE.products.products.map((product) => {
    // console.log(product);
    const productInfo = `
              <div class="card bg-base-100 w-96 shadow-xl">
                <figure class="px-10 pt-10">
                  <img
                    src="${product.images[0]}"
                    alt="Shoes"
                    class="rounded-xl" />
                </figure>
                <div class="card-body items-center text-center">
                  <h2 class="card-title"> ${product.title} </h2>
                  <p>  ${product.description} </p>
                  <div class="card-actions">
                    <button class="text-xl btn btn-primary">
                     $${product.price} USD
                    </button>

                     <button class="text-xl btn btn-success" onclick='addProductCart(${
                       product.id
                     }, "${product.title.replace("'", "")}", ${product.price})'>
                        Agregar al carrito
                    </button>
                    
                    <div>
                             <button class="text-xl btn btn-info" onclick='updateProduct(${
                               product.id
                             })'>
                        <i class="bi bi-pencil-square fs-3"></i> 
                        Actualizar
                             </button>


                            <button class="text-xl btn btn-error" onclick='deleteProduct(${
                               product.id
                             })'>
                                <i class="bi bi-trash3"></i>
                             Eliminar
                             </button>

                       
                    </div>

                  </div>
                </div>
              </div>`;

    return productInfo;
  });

  // console.log(cardProduct);
  const htmlProducts = cardProduct.join(" ");
  // console.log(htmlProducts);
  document.querySelector("#catalogo").innerHTML = htmlProducts;
};

const searchProduct = async () => {
  const inputSearch = document.querySelector("#input-search");

  // console.log(inputSearch.value);

  const response = await axios.get(
    `https://dummyjson.com/products/search?q=${inputSearch.value}`
  );

  // console.log(response.data);
  DATA_STORE.products = response.data;

  // console.log(response.data.products.length);

  if (response.data.products.length) {
    showProduct();
  } else {
    alert("No hay productos para esta busqueda.");
  }
};

const eventKeyEnter = (event) => {
  if (event.code === "Enter") {
    searchProduct();
  }
};

const createProductSubmit = async (product) => {
  const response = await axios.post(
    "https://dummyjson.com/products/add",
    product
  );

  if (response.data.id !== undefined) {
    alert("el producto ha sido creado");
    document.querySelector("#my_modal_product").close();
    listProduct();
  }
};

const createProduct = () => {
  console.log("creando producto");

  const title_product = document.querySelector("#title_product").value;
  const info_product = document.querySelector("#info_product").value;
  const price_product = document.querySelector("#price_product").value;
  const image_product = document.querySelector("#image_product").src;

  const product = {
    title_product,
    info_product,
    price_product,
    image_product,
  };

  console.log(product);

  createProductSubmit(product);
};

listProduct();
// listProduct();
// listProduct();
// listProduct();

const addProductCart = (product_id, product_title, product_price) => {
  console.log("agregando al carrito", product_id, product_title, product_price);

  const itemCart = {
    id: product_id,
    title: product_title,
    price: product_price,
  };

  DATA_STORE.cart.push(itemCart);

  console.log(DATA_STORE);

  updateCart();
};

const updateCart = () => {
  const totalItems = document.querySelector("#total-items");
  const subTotal = document.querySelector("#sub-total");

  totalItems.innerHTML = `<b> ${DATA_STORE.cart.length} items  </b>`;

  let subTotalPrice = 0;
  DATA_STORE.cart.forEach((item) => {
    subTotalPrice += item.price;
  });

  subTotal.innerHTML = `<b> ${subTotalPrice.toFixed(2)} USD  </b>`;
};

const updateProduct = (product_id) => {
  console.log("actualizando prducto", product_id);

  my_modal_product_update.showModal();

  axios.get(`https://dummyjson.com/products/${product_id}`).then((res) => {
    console.log(res.data);

    const product = res.data;

    document.querySelector("#title_product_update").value = product.title;
    document.querySelector("#price_product_update").value = product.price;
    document.querySelector("#info_product_update").value = product.description;

    document.querySelector("#title_product_id").value = product.id;
  });
};

const updateProductService = () => {
  // recopilar los datos del modal my_modal_product_update con el ID title_product_id

  const title_product_id = document.querySelector("#title_product_id").value;

  const product = {
    title: "",
    price: "",
    description: "",
  };

  axios
    .put(`https://dummyjson.com/products/${title_product_id}`, product)
    .then((res) => {
      console.log(res.data);
    });
};




const deleteProduct = (productoid) => {
    console.log("elimiando ", productoid);

    axios
    .delete(`https://dummyjson.com/products/${productoid}`)
    .then((res) => {
      console.log(res.data);
    });

}



const loginAuth = () => {

    const data = {
        username: document.querySelector("#email").value,
        password: document.querySelector("#password").value
    }

    console.log(data);

    axios.post('https://dummyjson.com/auth/login', data).then((res) => {
        
        console.log(res.data);
        
        // pendiente almacenar credenciales en memory persistent y temporal

        localStorage.setItem("profile",  JSON.stringify(res.data) );

        const accessToken = res.data.accessToken;
        const refreshToken= res.data.refreshToken;


        // setea la cookie caduca en 24h
        const fechaActual = new Date();
        const hora = new Date();
        hora.setTime(1000*60*60*24);
        fechaActual.setTime( fechaActual.getTime() +  hora.getTime() );

        document.cookie = `accessToken=${accessToken};path=/;expires=` + fechaActual.toUTCString();
        document.cookie = `refreshToken=${refreshToken};path=/;expires=` + fechaActual.toUTCString();


        if (accessToken && refreshToken) {
            window.location.href = "/project-js/index.html";
        }


    })

}



const loadProfile = () => {

   const profile = document.querySelector("#profile");
   profile.style.display = "none";


   checkLogin();


}


const getCookie = (name) => {
  const value = `; ${document.cookie}`;  // Agrega un punto y coma al inicio para facilitar la búsqueda
  const parts = value.split(`; ${name}=`);  // Divide la cookie por el nombre buscado
  if (parts.length === 2) {
      return parts.pop().split(';').shift();  // Regresa el valor de la cookie
  }
  return null;  // Si la cookie no existe, retorna null
}




const getProfileUser  = (accessToken) => {

    const headers = {
        'Authorization': "Bearer " + accessToken
    }

    axios.get('https://dummyjson.com/auth/me',  {headers: headers} ).then((res) => {
      console.log(res.data);
      localStorage.setItem("profile",  JSON.stringify(res.data) );

      const profile = document.querySelector("#profile");
      const login = document.querySelector("#login");

      login.style.display = "none";
      profile.style.display = "block";

      document.querySelector("#firstName").innerHTML = res.data.firstName;


    } )

}


const checkLogin = () => {

  const cookieValue = getCookie('accessToken');

  console.log(cookieValue);

  if (cookieValue){
      
      // como altenativa validar el token que este activo 

      // cargar la sesion del usuario
      getProfileUser(cookieValue);

  } else {
      console.log("seccion restringida");
      
      // generar rediccion al Login
      // location.href = "/project-js/auth/login.html";
  }
  

}




loadProfile();



const logout = () => {

    localStorage.removeItem("profile");

    const fechaActualNow = new Date();

    document.cookie = `accessToken=;path=/; expires=${fechaActualNow.toUTCString()}`;


    location.href = "/project-js/auth/login.html";

}