import "./App.css";
import HomePage from "./pages/homepage.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Erorpage from "./pages/Erorpage.js";
import Useracount from "./pages/useraccountpage.js";
import Fullporductspage from "./pages/fullprductpage.js";
import Aboutpage from "./pages/aboutpage.js";
import Contactpage from "./pages/contactpage.js";
import Womenpage from "./pages/womenpage.js";
import Menpage from "./pages/menpage.js";
import Childrenpage from "./pages/childernpage.js";
import Shoesbagspage from "./pages/bagsclothes.js";
import UserProfilepage from "./pages/userprofilepage.js";
import Loginpage from "./pages/loginpage.js";
import CartPage from "./pages/cartpage.js";
import ProductDetails from "./pages/productDetails.js";
import Usernavbar from "./components/usernavbar.js";
import NavbarScroll from "./components/navbar.js";
import React, { useState } from "react";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Assuming you want to track login state

  return (
    <BrowserRouter>
      {/* Conditionally render Usernavbar if logged in, otherwise show NavbarScroll */}
      {isLoggedIn ? <Usernavbar /> : <NavbarScroll />}
      
      <Routes>
        {/* Define routes for each page/component */}
        <Route path="/about" element={<Aboutpage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/" element={<HomePage />} /> {/* Default Route */}
        <Route path="/contact" element={<Contactpage />} />
        <Route path="/Fullproducts" element={<Fullporductspage />} />
        <Route path="/womenpage" element={<Womenpage />} />
        <Route path="/menpage" element={<Menpage />} />
        <Route path="/childernpage" element={<Childrenpage />} />
        <Route path="/shoesbags" element={<Shoesbagspage />} />
        <Route path="/profile" element={<UserProfilepage />} />
        <Route path="/sign-up" element={<Loginpage />} />
        <Route path='/cartpage' element={<CartPage />} />
        <Route path="/useraccount" element={<Useracount />} />
        <Route path="/product/:productId" element={<ProductDetails />} />
        
        {/* Catch-all route for unmatched paths */}
        <Route path="/*" element={<Erorpage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
