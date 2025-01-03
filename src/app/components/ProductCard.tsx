"use client"; // Add this line at the top of your file

import React from "react";

// Define the Product type
export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

// Define the props for the ProductCard component
interface ProductCardProps extends Product {
  onAddToCart: (product: Product) => void;
}

// Functional Component
const ProductCard: React.FC<ProductCardProps> = ({
  id,
  name,
  price,
  image,
  onAddToCart,
}) => {
  return (
    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out">
      {/* Product Image */}
      <img
        src={image}
        alt={name} // Use the product name for better accessibility
        className="w-full h-56 object-cover rounded-md mb-4 transform transition-all duration-300 ease-in-out"
      />

      {/* Product Name */}
      <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">
        {name}
      </h3>

      {/* Product Price */}
      <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
        ${price.toFixed(2)}
      </p>

      {/* Add to Cart Button */}
      <button
        onClick={() => onAddToCart({ id, name, price, image })}
        className="bg-indigo-600 dark:bg-indigo-500 text-white px-4 py-2 rounded-lg text-lg shadow-md hover:bg-indigo-700 dark:hover:bg-indigo-600 transition duration-300 ease-in-out"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
