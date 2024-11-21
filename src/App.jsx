import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import Cart from "./Pages/Cart";
import About from "./Pages/About";
import Footer from "./Components/Footer";


function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen ">
        <marquee className="text-xl font-bold text-white bg-green-500">***ASPV International Production Pvt Ltd ***</marquee>
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
                <Route path="/cart" element={<Cart />} />
            
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
