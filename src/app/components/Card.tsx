import React from "react";

const FloatingImageContentBlock = () => {
  return (
    <section className="container mx-auto py-10 flex flex-col md:flex-row items-center">
      <div className="md:w-1/2 md:pr-10">
        <h2 className="text-3xl font-bold mb-4 text-white">Delicious Cakes</h2>
        <p className="text-white mb-4">
          Experience the sweetest cakes in town, made with fresh ingredients and lots of love.
        </p>
        <button className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600 transition duration-200">
          Order Now
        </button>

        <h3 className="text-2xl font-semibold mt-6 mb-2 text-center text-white">
          New Cake Flavors Coming Soon!
        </h3>
        <ul className="list-disc pl-5">
          <li className="text-white mb-2">
            <strong>Chocolate Fudge Cake:</strong> Rich and moist, topped with creamy chocolate ganache.
          </li>
          <li className="text-white mb-2">
            <strong>Strawberry Cheesecake:</strong> A delightful mix of creamy cheesecake and fresh strawberries.
          </li>
          <li className="text-white mb-2">
            <strong>Red Velvet Cake:</strong> Soft and velvety with a hint of cocoa, paired with cream cheese frosting.
          </li>
          <li className="text-white mb-2">
            <strong>Vanilla Sprinkle Cake:</strong> Classic vanilla flavor with colorful sprinkles for extra fun.
          </li>
        </ul>
      </div>

      <div className="md:w-1/2 mt-6 md:mt-0">
        <img
          src="cake.jpeg"
          alt="cake"
          className="w-full h-auto rounded-lg shadow-lg transition-transform duration-500 ease-in-out transform hover:scale-105"
        />
      </div>
    </section>
  );
};

export default FloatingImageContentBlock;
