import React from "react";
import { BsFillCake2Fill } from "react-icons/bs";
import { FaSearch, FaBolt } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
export default function Navbar() {
  return (
    <div className="grid xl:grid-cols-1 grid-cols-1">
      <div className="p-5">
        <div className="py-3 px-3 rounded-xl border w-full">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              {/* Logo */}
              < BsFillCake2Fill className="w-6 h-6 text-yellow-400 hover:text-red-300" />
              
              {/* Search input */}
              <div style={{ position: "relative" }}>
                <input
                  className="rounded-3xl py-3 px-3 outline-none text-xs w-[350px] pr-10 hidden lg:block md:block"
                  placeholder="Search for your menu."
                />
                <FaSearch className="w-5 h-5 text-lime-300 absolute right-3 top-1/2 transform -translate-y-1/2 hidden lg:block md:block" />
              </div>
            </div>

            <div className="flex items-center gap-2">
              {/* Order now message */}
              <FaBolt className="w-5 h-5 text-amber-400 hidden lg:block md:block" />
              <p className="text-sm text-white hidden lg:block md:block">
                Order now and get it in
                <span className="text-amber-400"> 15 minutes</span>
              </p>
            </div>

            {/* Cart icon */}
            <FaShoppingCart className="inline-block w-8 h-8 rounded-full ring-1 relative text-cyan-400 hover:ring-amber-400 text-lime-400" />
          </div>
        </div>
      </div>
    </div>
  );
}