import { create } from 'zustand'



const changeTheme = (set, color) => {
    //axios
    console.log("cambiando el color", color);
    set({
        theme: color
    });
}


const addProduct = (set, get, product) => {

    console.log("agregando product");

    const catalogoPreview = get().catalogProduct;

    set({
        catalogProduct: [ ...catalogoPreview,  product]
    })
}



const addCartProduct = (set, get, product) => {

    console.log("agregando addCartProduct");

    const cartPreview = get().cart;

    set({
        cart: [ ...cartPreview,  product]
    })
}


const useStore = create( (set, get) => (
    {
        perfil: {},
        catalogProduct: [],
        addProduct: (product) => addProduct(set, get, product),
        theme: "purple",
        changeTheme: (color) => changeTheme(set, color),
        addCartProduct: (product) => addCartProduct(set, get, product),
        cart: [],
    }
) );


export default useStore;