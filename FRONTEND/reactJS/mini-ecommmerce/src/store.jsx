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



const useStore = create( (set, get) => (
    {
        perfil: {},
        catalogProduct: [],
        addProduct: (product) => addProduct(set, get, product),
        theme: "purple",
        changeTheme: (color) => changeTheme(set, color)
    }
) );


export default useStore;