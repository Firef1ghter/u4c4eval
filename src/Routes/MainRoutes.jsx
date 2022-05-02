import React from "react";
import {Routes,Route} from "react-router";
import {Home} from "../components/Home";
import {Products} from "../components/Products";
import {About} from "../components/About";
import {Navbar} from "../components/Navbar";

const MainRoutes = () => {
  return (
    <>
    <Navbar />
    <Routes>
     <Route exact path="/" element={<Home />} />
     <Route exact path="/products" element={<Products />} />
     <Route exact path="/about" element={<About />} />
     
    </Routes>
    
    
    
    
    
    
    </>

    
  );
};
export { MainRoutes };
