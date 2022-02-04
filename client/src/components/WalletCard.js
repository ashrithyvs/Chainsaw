import React from "react";
import { AiFillPlayCircle } from "react-icons/ai";
import { SiEthereum } from "react-icons/si";
import { BsInfoCircle } from "react-icons/bs";
export default function WalletCard() {
  return (
    <div className="bg-slate-900 w-2/3 py-3 mx-auto h-full rounded-xl flex flex-col justify-between">
      <div className="flex justify-between">
        <div className="mx-4 my-3 rounded-full p-2 border-2">
          <SiEthereum fontSize={21} color="#fff" />
        </div>
        <div className="mx-2 my-1 rounded-full p-2 ">
          <BsInfoCircle fontSize={20} color="#fff" />
        </div>
      </div>
      <div className="text-white align-baseline m-4 flex-col space-y-1">
        <h4>...</h4>
        <h4 className="font-bold">Ethereum</h4>
      </div>
    </div>
  );
}
