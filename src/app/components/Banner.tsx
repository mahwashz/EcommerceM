import React from "react";

export default function Banner() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-black to-gray-700 font-sans px-6 py-12 mb-7">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-20">
        <img
          src="https://static.vecteezy.com/system/resources/previews/015/700/463/non_2x/dark-chocolate-cake-with-ganashe-frosting-photo.jpg"
          alt="pizza"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Banner Content */}
      <div className="relative z-10 container mx-auto flex flex-col justify-center items-center">
        <h2 className="text-white sm:text-5xl font-bold mb-4">
          Discover our Menu
        </h2>
        <p className="text-white text-lg text-center mb-6 max-w-xl">
          Shop now for our Cake Discount
        </p>
        <button
          type="button"
          className="bg-cyan-500 text-white text-md font-semibold py-3 px-6 rounded-full shadow-lg hover:bg-blue-600 transition duration-300"
        >
          Exciting Deals launch at 12 PM
        </button>
      </div>
    </div>
  );
}