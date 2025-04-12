import React, { useContext, useEffect, useState } from "react";
import { SidebarContext } from "../contexts/SidebarContext";
import { CartContext } from "../contexts/CartContext";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../img/logo.svg";
import { BsBag } from "react-icons/bs";
import { FiMenu } from "react-icons/fi"; // Hamburger Icon
import { FiLogOut } from "react-icons/fi"; // Ensure this is imported at the top


const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { itemAmount } = useContext(CartContext);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsActive(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token"); // Clear the JWT token
    navigate("/"); // Redirect to login page
  };
  

  return (
    <header
      className={`${
        isActive ? "bg-white py-4 shadow-md" : "bg-none py-6"
      } fixed w-full z-10 transition-all`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between h-full">
        {/* Logo */}
        <Link to="/">
          <div className="w-[40px]">
            <img src={Logo} alt="Logo" />
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6 text-sm font-medium">
          <Link to="/home" className="hover:text-gray-600 transition">
            Home
          </Link>
          <button
  onClick={handleLogout}
  className="hover:text-gray-600 transition text-1l flex items-center mb-2"
  title="Logout"
>
  <FiLogOut />
</button>


          <div
            onClick={() => setIsOpen(!isOpen)}
            className="cursor-pointer flex relative"
          >
            <BsBag className="text-2xl" />
            <div className="bg-red-500 absolute -right-2 -bottom-2 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center">
              {itemAmount}
            </div>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center gap-4">
          <div
            onClick={() => setIsOpen(!isOpen)}
            className="cursor-pointer flex relative"
          >
            <BsBag className="text-2xl" />
            <div className="bg-red-500 absolute -right-2 -bottom-2 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center">
              {itemAmount}
            </div>
          </div>
          <button onClick={() => setMenuOpen(!menuOpen)}>
            <FiMenu className="text-2xl" />
          </button>
        </div>

        {/* Mobile Nav Dropdown */}
        {menuOpen && (
  <div className="md:hidden absolute top-full right-4 mt-2 bg-white shadow-md rounded-lg px-6 py-4 text-sm font-medium z-20">
    <Link
      to="/home"
      onClick={() => setMenuOpen(false)}
      className="block mb-3 hover:text-gray-600 transition"
    >
      Home
    </Link>
    <button
      onClick={() => {
        handleLogout();
        setMenuOpen(false);
      }}
      className="flex items-center gap-2 hover:text-gray-600 transition"
      title="Logout"
    >
      <FiLogOut className="text-xl" />
      Logout
    </button>
  </div>
)}

      </div>
    </header>
  );
};

export default Header;
