import React from "react";
import logo from "../assets/logo.png";
// import Login from "../Components/Login";
import SignUp from "../Components/SignUp";
import { useState } from "react";
import { Link } from "react-router-dom";


const Header: React.FC = () => {
    const [showLogin, setShowLogin] = useState(false);
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <a href="/" className="flex items-center gap-2">
          <img src={logo} alt="Logo" className="h-8 md:h-10 object-contain" />
        </a>
        <nav className="hidden md:flex gap-6">
          <a
            href="/"
            className="text-sm font-medium text-purple-900 hover:text-purple-700">
            Home
          </a>
          <a
            href="#"
            className="text-sm font-medium text-gray-500 hover:text-purple-700">
            Listings
          </a>
         <Link to='/About' className='text-sm font-medium text-gray-500 hover:text-purple-700'>
            About
          </Link>
          <a
            href="#"
            className="text-sm font-medium text-gray-500 hover:text-purple-700">
            Contact
          </a>
        </nav>
        <div className="flex items-center gap-4">
          <a
            href="/dashboard"
            className="text-sm font-medium text-gray-500 hover:text-purple-700 hidden md:block">
            Dashboard
          </a>
          {/* <a href="/login" className="text-sm font-medium text-gray-500 hover:text-purple-700 hidden md:block">
                        Login
                    </a> */}
          <button
            onClick={() => setShowLogin(true)}
            className=" px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-purple-700 to-purple-500 rounded-md hover:from-purple-800 hover:to-purple-600text-sm hidden md:block">
            Login/SignUp
          </button>

          {showLogin && <SignUp onClose={() => setShowLogin(false)} />}
          {/* <button className="px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-purple-700 to-purple-500 rounded-md hover:from-purple-800 hover:to-purple-600">
            Login
          </button> */}
        </div>
      </div>
    </header>
  );
};

export default Header;
