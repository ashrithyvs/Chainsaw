import React from "react";
import TransferForm from "./TransferForm";
import WalletCard from "./WalletCard";
import { useContext } from "react";
import { TransactionContext } from "../contexts/TransactionsContext";

export default function Hero() {
  const { connectWallet, accounts } = useContext(TransactionContext);
  const gridCellStyle = "border px-5 py-4";
  return (
    <div className=" container flex flex-col space-x-0 lg:flex-row justify-around py-20 my-3 w-4/6 items-start lg:space-x-8 ">
      <div className="flex flex-col lg:w-1/2 w-full h-full">
        <div className="flex flex-col space-y-4">
          <h2 className="w-full text-wrap text-5xl">
            Send Crypto <br /> across the world
          </h2>
          <span className="font-light">
            Explore the crypto world. Buy and Sell <br /> cryptocurrencies
            easily on Chainsaw.
          </span>
          {accounts ? (
            <span className="font-medium">Connected to MetaMask Wallet!</span>
          ) : (
            <button
              onClick={connectWallet}
              className="w-full font-semi-bold p-3 px-8 bg-blue-700 hover:bg-blue-800 rounded-full"
            >
              Connect Wallet
            </button>
          )}
        </div>
        <div className="grid md:grid-cols-3 grid-cols-2 mt-20">
          <div className={`px-5 py-4 rounded-tl-2xl border ${gridCellStyle}`}>
            Reliability
          </div>
          <div className={`${gridCellStyle}`}>Security</div>
          <div className={`rounded-tr-2xl  ${gridCellStyle}`}>Ethereum</div>
          <div className={`rounded-bl-2xl ${gridCellStyle}`}>Web 3.0</div>
          <div className={`${gridCellStyle}`}>Low fees</div>
          <div className={`rounded-br-2xl ${gridCellStyle}`}>Blockchain</div>
        </div>
      </div>
      <div className="flex flex-col space-y-3 py-3 lg:w-1/2 w-full sm:mt-8">
        <WalletCard account={accounts} />
        <TransferForm />
      </div>
    </div>
  );
}
