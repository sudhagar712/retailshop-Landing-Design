import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import logo from "../assests/images/logobg.png"
import { FaShoppingCart } from "react-icons/fa";

const Header = () => {

 useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,   
    });
  }, []);




  return (
    <header className=" bg-black  text-white shadow-lg">
      {/* Top Bar */}
      <div className="flex justify-between items-center py-2 px-4 md:px-10">
        {/* Left Section */}
        <div className="flex items-center">
          <div className="flex items-center">
            <img src={logo} className="w-[90px] h-[90px] " />

            <span data-aos="zoom-in-up" className="text-3xl   mx-3 font-extrabold text-white ">
              AGR <span className="text-yellow-500">WORLD</span>
            </span>
          </div>
        </div>

        {/* Search Bar */}
        <div className="hidden md:flex items-center bg-gradient-to-r from-white via-gray-300 to-yellow-500 rounded-full px-4 py-2">
          <input
            type="text"
            placeholder="Search Product"
            className="bg-transparent text-black outline-none placeholder-black w-full"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="white"
            className="w-5 h-5 ml-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11 19a8 8 0 100-16 8 8 0 000 16zM21 21l-4.35-4.35"
            />
          </svg>
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-4">
          <FaShoppingCart className="text-3xl text-gray-200 " />
          <span className="hidden md:block border-2  border-white bg-black  rounded  font-bold cursor-pointer shadow p-5">
            Register/Login
          </span>
        </div>
      </div>

      {/* Bottom Navigation */}
      <nav className="bg-gray-500 shadow-lg  text-white ">
        <ul className=" max-sm:hidden  flex flex-wrap justify-center space-x-20   text-md py-3 ">
          <li className="hover:text-blue-300 cursor-pointer ">Groceries</li>
          <li className="hover:text-blue-300 cursor-pointer">
            Home & Lifestyle
          </li>
          <li className="hover:text-blue-300 cursor-pointer">Electronics</li>
          <li className="hover:text-blue-300 cursor-pointer">Fashion</li>
          <li className="hover:text-blue-300 cursor-pointer">
            Industrial & Professional Supplies
          </li>
          <li className="hover:text-blue-300 cursor-pointer">
            Precious Jewellery
          </li>
          <li className="hover:text-blue-300 cursor-pointer">Wellness</li>
          <li className="hover:text-blue-300 cursor-pointer">All Categories</li>
        </ul>
      </nav>

      {/* Search Bar */}
      <div className=" md:hidden md:flex items-center  rounded-full md:px-4 md:py-2 p-3  ">
        <input
          type="text"
          placeholder="Search Product"
          className=" text-black  outline-none rounded-full placeholder-black w-full p-3 "
        />
       
      </div>
    </header>
  );
};

export default Header;
