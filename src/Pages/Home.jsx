import React from "react";
import ProductGrid from "../Components/ProductGrid";
import Hero from "../Components/Herosection/Hero";
import Offer from "../Components/Herosection/Offer";
import Virtual from "../Components/Virtual";



const Home = () => {
  const products = [
    {
      id: 1,
      name: "Sugar [S1-30]",
      category: "FMCG",
      price: "$40",
      image: "https://bakerpedia.com/wp-content/uploads/2019/12/Cane-Sugar_baking-ingredient-e1577217160839.jpg",
    },
    {
      id: 2,
      name: "Rice (Basmati)",
      category: "Commodities",
      price: "$30",
      image: "https://biobasics.org/cdn/shop/products/Untitleddesign_ce44865d-cd99-4de4-b08f-f77f759162ee.png?v=1657691087&width=1000",
    },
    {
      id: 3,
      name: "Sunflower Oil",
      category: "Oil",
      price: "$50",
      image: "https://yugaorganic.com/wp-content/uploads/2021/07/4-SUNFLOWER-OIL-NATURAL-UNFILTERED.jpg",
    },
    {
      id: 4,
      name: "Toor Dal",
      category: "Dal",
      price: "$25",
      image: "https://ifestore.com/wp-content/uploads/2024/03/TUR-3.jpg",
    },
    {
      id: 5,
      name: "Crystal Salt",
      category: "Salt",
      price: "$10",
      image: "https://biobasics.org/cdn/shop/files/buy-organic-himalayan-rocksalt-online-at-bio-basics-store.png?v=1693372258",
    },
  ];

  return (
    <>
  
      <Hero />
        <Offer/>
        <Virtual/>
        
   
      <div className="container bg-white mx-auto p-10">
       
       <div className="pt-7 p-5 text-center">
        <span  className="text-3xl   mx-3 font-extrabold text-black shadow ">
              Top<span className="text-yellow-500">Products Collection</span>
            </span>
      </div>

        <ProductGrid products={products} />
      </div>
    </>
  );
};

export default Home;
