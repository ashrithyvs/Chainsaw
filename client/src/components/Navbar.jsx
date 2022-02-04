import React from "react";

export default function Navbar() {
  return (
    <div className="container py-4 flex items-center justify-between">
      <h3 className="font-semi-bold text-4xl hover:text-slate-300 cursor-pointer">
        Greed
      </h3>
      <ul className="flex space-x-6 items-center">
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
