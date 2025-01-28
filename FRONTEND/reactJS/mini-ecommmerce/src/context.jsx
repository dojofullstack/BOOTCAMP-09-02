import { createContext } from "react"


export const theme = {
    color: "light",
    valorCode: "#00f12",
}


const themeContext = createContext(theme);

export default themeContext;