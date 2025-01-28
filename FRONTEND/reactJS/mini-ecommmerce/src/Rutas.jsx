import { useState } from "react"
import themeContext, { theme } from "./context";
import Home from "./Views/Home";




const Rutas = () => {

    const [themePage, setThemePage] =  useState(theme);
    // const [themePageDefault, setThemePage] =  useState(theme);
    // const [themePageSecondary, setThemePage] =  useState(theme);

    const changeTheme = (color) => {
        console.log("cambiando el color", color);
        setThemePage(color);
    }

    return (
        <>

            <themeContext.Provider value={{
                themePage,
                changeTheme
            }} >

                <Home/>

            </themeContext.Provider>

        
        </>
    )
}


export default Rutas;