import { useState } from "react";
import themeContext, { theme } from "./context";
import Home from "./Views/Home";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Blog } from "./Views/Blog";
import { NotFound } from "./Views/NotFound";
import ProductDetail from "./Views/Product";
import {Checkout} from "./Views/Checkout";



const Rutas = () => {
  const [themePage, setThemePage] = useState(theme);
  // const [themePageDefault, setThemePage] =  useState(theme);
  // const [themePageSecondary, setThemePage] =  useState(theme);

  const changeTheme = (color) => {
    console.log("cambiando el color", color);
    setThemePage(color);
  };

  return (
    <>
      <themeContext.Provider
        value={{
          themePage,
          changeTheme,
        }}
      >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/product/:slugProduct" element={<ProductDetail />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/profile" element={<Blog />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </themeContext.Provider>
    </>
  );
};

export default Rutas;
