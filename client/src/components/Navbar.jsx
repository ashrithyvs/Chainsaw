import React from "react";
// import { HiMenuAlt4 } from "react-icons/hi";
// import { AiOutlineClose } from "react-icons/ai";
import { GiChainsaw } from "react-icons/gi";
export default function Navbar() {
  return (
    <div className="container py-4 flex items-center justify-between">
      <div className="flex space-x-3  sm:ml-5 items-center">
        <GiChainsaw fontSize="250%" />
        <h3 className="font-medium text-4xl hover:text-slate-300 cursor-pointer">
          Chainsaw
        </h3>
      </div>
      <ul className="invisible lg:space-x-6 sm:space-x-0 items-center md:invisible lg:visible lg:flex">
        <li className="cursor-pointer hover:text-slate-300">Market</li>
        <li className="cursor-pointer hover:text-slate-300">Exchange</li>
        <li className="cursor-pointer hover:text-slate-300">Tutorials</li>
        <li className="cursor-pointer hover:text-slate-300">Wallets</li>
        <button className="p-3 px-8 bg-blue-700 hover:bg-blue-800 rounded-full">
          Login
        </button>
      </ul>
    </div>
  );
}
