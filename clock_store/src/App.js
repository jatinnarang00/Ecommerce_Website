import React from "react";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Products from "./Products";
import Cart from "./Cart";
import SingleProduct from "./singleProduct";
import ErrorPage from "./ErrorPage";
import { BrowserRouter , Routes , Route } from "react-router-dom";
import {GlobalStyle} from './GlobalStyle'
import Header from "./Components/Header";
import { ThemeProvider } from "styled-components";
import Footer from "./Components/Footer";


const App = ()=>{

  const theme ={
        colors:{
          bg:"#F6F8FA",
          footer_bg:"#0a1435",
          btn:"rgb(98 84 135)",
          border:"rgba(98,84,243,0.5)",
          hr:"#ffffff",
          gradient:"linear-gradient(0deg,rgb(132 144 255) 0%,rgb(98 189 225) 100%",
          shadow:"rgba(0,0,0,0.16)0px 1px 4px",
        },
        media:{
          mobile:"768px",
          tab:"998px",
        },
  };

   return(
    <ThemeProvider theme={theme}>
     <BrowserRouter>
     <GlobalStyle/>
     <Header/>
       <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/products" element={<Products/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/singleproduct/:id" element={<SingleProduct/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="*" element={<ErrorPage/>}/>
       </Routes>
      <Footer/> 
     </BrowserRouter>
     </ThemeProvider>

   )};
export default App;
