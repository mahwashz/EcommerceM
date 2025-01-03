import React from "react";

const products = [
  {
    id: 1,
    title: "Speacial",
    category: "Classic",
    price: "350.00",
    imageUrl: "j1.jpeg",
    bgColor: "bg-gradient-to-r from-blue-500 to-indigo-500",
  },
  {
    id: 2,
    title: "Customize your",
    category: "Delights",
    price: "350.00",
    imageUrl: "j2.jpg",
    bgColor: "bg-gradient-to-r from-yellow-500 to-orange-500",
  },
  {
    id: 3,
    title: "Choclates Speacial",
    category: "Delights",
    price: "350.00",
    imageUrl: "j3.webp",
    bgColor: "bg-gradient-to-r from-teal-500 to-green-500",
  },
];

export default function ProductList() {
  return (
    <div className="p-6 bg-gradient-to-b from-gray-800 to-gray-900 min-h-screen">
      <h2 className="text-white text-4xl font-bold text-center mb-10">
       Our famous cakes
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
        {products.map((product) => (
          <div
            key={product.id}
            className={`relative overflow-hidden rounded-xl shadow-lg ${product.bgColor} hover:scale-105 hover:shadow-2xl transition-transform duration-300`}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent opacity-70"></div>
            <div className="p-6 text-center relative z-10">
              <img
                className="mx-auto w-32 h-32 object-cover rounded-full mb-4 border-4 border-white shadow-lg"
                src={product.imageUrl}
                alt={product.title}
              />
              <h3 className="text-white text-xl font-semibold">{product.title}</h3>
              <p className="text-gray-200 text-sm">{product.category}</p>
              <span className="block mt-4 text-gray-900 bg-white px-4 py-2 rounded-full font-bold text-sm shadow-md">
                Rs. {product.price}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
