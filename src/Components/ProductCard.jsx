import React from "react";
import { FaStar } from "react-icons/fa"; // Importing the star icon

const ProductCard = ({ product }) => {
  return (
    <div className="border rounded-lg hover:bg-gray-100 hover:shadow-xl p-4">
    
     
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-50 object-cover rounded p-3"
      />
      
   
      <h3 className="text-lg font-bold mt-2">{product.name}</h3>
      
    
      <p className="text-gray-700">{product.category}</p>
      
    
      <p className="text-blue-600 font-bold">{product.price}</p>

      <div className="flex items-center mt-2">
       
        {[...Array(5)].map((_, index) => (
          <FaStar
            key={index}
            className="text-yellow-400"
            size={20}
          />
        ))}
      </div>
      
     
     
    </div>
  );
};

export default ProductCard;
