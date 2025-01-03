import React from "react";

const products = [
  {
    id: 1,
    title: "StrawBerry Cake",
    category: "Yummy",
    price: "3500.00",
    imageUrl: "st.jpeg",
    bgColor: "bg-gradient-to-r from-yellow-500 via-orange-400 to-red-400",
  },
  {
    id: 2,
    title: "Choclate Cake",
    category: "Sweet",
    price: "350.00",
    imageUrl: "ch.jpeg",
    bgColor: "bg-gradient-to-r from-pink-500 via-red-400 to-purple-500",
  },
  {
    id: 3,
    title: "Vanilla Cake",
    category: "Delights",
    price: "3500.00",
    imageUrl: "vn.webp",
    bgColor: "bg-gradient-to-r from-green-400 via-teal-400 to-blue-400",
  },
];

export default function ProductList() {
  return (
    <div className="p-4 flex flex-wrap items-center justify-center mb-6">
      {products.map((product) => (
        <div
          key={product.id}
          className={`flex shrink-0 m-6 relative overflow-hidden ${product.bgColor} rounded-lg shadow-lg group max-w-sm transition-transform transform hover:scale-105 hover:shadow-2xl`}
        >
          <svg
            className="absolute bottom-0 left-0 mb-8 scale-150 group-hover:scale-[1.65] transition-transform duration-300"
            viewBox="0 0 375 283"
            fill="none"
            style={{ opacity: 0.15 }}
          >
            <rect
              x="159.52"
              y="152"
              width="152"
              height="152"
              rx="8"
              transform="rotate(-45 159.52 152)"
              fill="white"
            />
            <rect
              x="0"
              y="107.48"
              width="152"
              height="152"
              rx="8"
              transform="rotate(-45 0 107.48)"
              fill="white"
            />
          </svg>

          <div className="relative pt-10 px-10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <div
              className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"
              style={{
                background: "radial-gradient(circle, black, transparent 50%)",
                transform: "rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)",
                opacity: 0.2,
              }}
            ></div>
            <img
              className="relative w-40 h-40 object-cover rounded-full border-4 border-white shadow-md"
              src={product.imageUrl}
              alt={product.title}
            />
          </div>

          <div className="relative text-white px-6 pb-6 mt-6">
            <span className="block opacity-75 -mb-1">{product.category}</span>
            <div className="flex justify-between items-center">
              <span className="block font-semibold text-xl">{product.title}</span>
              <span className="block bg-white rounded-full text-orange-500 text-xs font-bold px-3 py-2 leading-none shadow-md">
                Rs. {product.price}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
