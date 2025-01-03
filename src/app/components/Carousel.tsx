import React from "react";

export default function Carousel() {
  return (
    <div>
      <section className="bg-gradient-to-r from-black to-gray-800">
        <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-12 lg:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* cake 1 */}
            <div className="flex-shrink-0 w-full bg-gradient-to-r from-black to-gray-800 h-auto rounded-lg overflow-hidden shadow-lg">
              <a
                href=""
                className="group relative flex flex-col overflow-hidden rounded-lg"
              >
                <img
                  src="c3.jpeg"
                  alt="Pizza 1"
                  className="w-full h-[350px] object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-gray-900/30 to-gray-900/10"></div>
                <h3 className="z-10 text-3xl font-semibold text-white absolute top-0 left-0 p-6 sm:text-2xl">
                Berry Burst Bliss
                </h3>
              </a>
            </div>

            {/* cake 2 */}
            <div className="flex-shrink-0 w-full bg-gradient-to-r from-black to-gray-800 h-auto rounded-lg overflow-hidden shadow-lg">
              <a
                href=""
                className="group relative flex flex-col overflow-hidden rounded-lg"
              >
                <img
                  src="c2.jpeg"
                  alt="cake 2"
                  className="w-full h-[350px] object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-gray-900/30 to-gray-900/10"></div>
                <h3 className="z-10 text-3xl font-semibold text-white absolute top-0 left-0 p-6 sm:text-2xl">
                Rainbow Fantasy Layers
                </h3>
              </a>
            </div>

            {/* cake 3 */}
            <div className="flex-shrink-0 w-full bg-gradient-to-r from-black to-gray-800 h-auto rounded-lg overflow-hidden shadow-lg">
              <a
                href=""
                className="group relative flex flex-col overflow-hidden rounded-lg"
              >
                <img
                  src="c1.jpeg"
                  alt="cake 3"
                  className="w-full h-[350px] object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-gray-900/30 to-gray-900/10"></div>
                <h3 className="z-10 text-3xl font-semibold text-white absolute top-0 left-0 p-6 sm:text-2xl">
                Velvet Rose Cake
                </h3>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
