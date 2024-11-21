import React from "react";
import ProductGrid from "../Components/ProductGrid";


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
    <div className="container mx-auto p-10">
       <div className="float-right mb-10">
        <select className="border-2  px-4  z-5 border-green-500 mb-10">
           <option>Choose Category</option>
          <option>Sugar</option>
           <option>Rice</option>
            <option>Oil</option>
             <option>Dal</option>
             <option>Salt</option>

        </select>
      </div>
      <h2 className="text-2xl font-bold mb-4 text-center mt-5">Our <span className="text-green-500">Products</span></h2>
     
      <ProductGrid products={products} />
    </div>
  );
};

export default Home;
