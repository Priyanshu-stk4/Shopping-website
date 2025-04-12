import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";

import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Loginpage from "./pages/LoginPage";
import Signuppage from "./pages/SignupPage";
import ProtectedRoute from "./pages/Protectedroute";


const App = () => {
  return (
    <div className="overflow-hidden">
      <Router>
        {/* <Header /> */}
        <Routes>
        <Route path="/" element={<Loginpage/>}></Route>
        <Route path="/signup" element={<Signuppage/>}></Route>

          <Route path="/home" element={<Home />}></Route>
          <Route path="/product/:id" element={<ProductDetails />}></Route>
          <Route path="/cart" element={<Sidebar/>}></Route>
          

        </Routes>
        {/* <Sidebar /> */}
        {/* <Footer /> */}
      </Router>
    </div>
  );
};

export default App;
