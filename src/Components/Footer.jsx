import React from "react";

const Footer = () => {
  return (
   <footer class="container p-5 bg-gray-200 shadow">
        <div class="flex flex-col md:flex-row items-center gap-8">
          <div class="w-full md:w-1/2">
            <p class="cardtitle">News Letter</p>
            <p>
              Sign up for our free Video Course and Urban garden inspiration
            </p>
          </div>

          <div class="w-full md:w-1/2">
            <div class="flex flex-col md:flex-row gap-2">
              <input
                class="w-full px-5 py-3 text-bodyColor outline-none"
                type="email"
                placeholder="Enter your email Address...."
              />
              <button className=" bg-yellow-500 p-4">Subscribe</button>
            </div>
          </div>
        </div>
        <p class="text-center mt-10 opacity-30">
          Copyrights &copy; 2024 sudhagarDEV. All rights reserved.
        </p>
      </footer>
  );
};

export default Footer;
