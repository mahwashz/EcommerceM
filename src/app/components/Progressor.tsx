import React from "react";

export default function Progressor() {
  return (
    <div>
      <div className="flex item-start max-w-screen-lg w-full mx-auto mt-10">

        <div className="w-full">
          <div className="flex items-center w-full">
          <div className="w-8 h-8 shrink-0 mx-[-1px] bg-amber-400 p-1.5 flex items-center justify-center rounded-full ">
            <span className="text-base text-black font-bolg">1</span>
          </div>
          <div className="w-full h-1 mx-4 rounded-lg bg-cyan-500"></div>
        </div>
        <div  className="mt-2 mr-4">
          <h6 className="text-base font-bold text-amber-400">Step:1 Choose your Dish</h6>
          <p className="text-xs text-white">Explore our Delicious Deserts And select your Favorite Cakes</p>
        </div>
        </div>

 <div className="w-full">
          <div className="flex items-center w-full">
          <div className="w-8 h-8 shrink-0 mx-[-1px] bg-amber-400 p-1.5 flex items-center justify-center rounded-full ">
            <span className="text-base text-black font-bolg">2</span>
          </div>
          <div className="w-full h-1 mx-4 rounded-lg bg-cyan-500"></div>
        </div>
        <div  className="mt-2 mr-4">
          <h6 className="text-base font-bold text-amber-400">Step:2 Customize your Order</h6>
          <p className="text-xs text-white">Choose Flavours</p>
        </div>
        </div>

        <div className="w-full">
          <div className="flex items-center w-full">
          <div className="w-8 h-8 shrink-0 mx-[-1px] bg-amber-400 p-1.5 flex items-center justify-center rounded-full ">
            <span className="text-base text-black font-bolg">3</span>
          </div>
          <div className="w-full h-1 mx-4 rounded-lg bg-cyan-500"></div>
        </div>
        <div  className="mt-2 mr-4">
          <h6 className="text-base font-bold text-amber-400">Step:3 Place your Order</h6>
          <p className="text-xs text-white"> Proceed to Check out Complete your Order</p>
        </div>
        </div>

      </div>
    </div>
  );
}
