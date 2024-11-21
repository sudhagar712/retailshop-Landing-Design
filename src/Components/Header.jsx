import React from "react";
import logo from "../assests/images/logo.png"
import { Link } from "react-router-dom";
import { FaCartArrowDown } from "react-icons/fa6";

const Header = () => {
  return (
    <header className=" text-black">
      <div className="container mx-auto p-4 flex justify-between items-center">
      
        <div className="flex items-center space-x-2">
            <img src={logo} className="w-[250px] h-[100px]"/>
          {/* <h1 className="text-xl font-bold">
            ASPV International Production Pvt Ltd
          </h1> */}
        </div>

        {/* Search Bar */}
        <div className="hidden sm:flex items-center space-x-2">
          <input
            type="text"
            placeholder="Search products..."
            className="px-4 py-2 rounded-md shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-300 text-black"
          />
          <button className="bg-white shadow-lg border-2 border-green-500  px-4 py-2 rounded-md hover:bg-blue-100 transition">
            Search
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="flex items-center space-x-4">
          <Link  className=" hover:text-green-500 font-bold text-sm">
            Login/Register
          </Link>
          <Link to="/cart" className="flex items-center hover:text-green-500  ">
            <FaCartArrowDown className="text-3xl" />
          </Link>
        </nav>
      </div>

      {/* Mobile Search Bar */}
      <div className="sm:hidden bg-green-500 p-3">
        <div className="flex items-center space-x-2">
          <input
            type="text"
            placeholder="Search products..."
            className="px-4 py-2 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300 text-black"
          />
          <button className="bg-white border-2 border-green-500 text-blue-600 px-4 py-2 rounded-md hover:bg-blue-100 transition">
            Search
          </button>
        </div>
      </div>
      <hr/>
      <hr/>
    </header>
  );
};

export default Header;
