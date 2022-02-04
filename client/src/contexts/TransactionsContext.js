import { useState, useEffect, createContext } from "react";
import { ethers } from "ethers";

import { contractAddress, contractABI } from "../utils/constants";

export const TransactionContext = createContext();

const { ethereum } = window;

const getEthereumContract = () => {
  const provider = new ethers.providers.Web3Provider(ethereum);
  const signer = provider.getSigner();
  const TransactionContract = new ethers.Contract(
    contractAddress,
    contractABI,
    signer
  );

  return TransactionContract;
};

export const TransactionProvider = ({ children }) => {
  const [accounts, setAccounts] = useState([]);
  const [transactionCount, setTransactionCount] = useState([]);
  const [formData, setFormData] = useState({
    addressTo: "",
    amount: "",
    keyword: "",
    message: "",
  });
  const isConnected = async () => {
    if (!ethereum) return alert("Install Metamask");
    const accounts = await ethereum.request({ method: "eth_accounts" });
    console.log(accounts);
  };

  const connectWallet = async () => {
    try {
      if (!ethereum) return alert("Install Metamask");
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      if (accounts.length) {
        setAccounts(accounts[0]);
      } else {
        console.log("No Accounts found");
      }
    } catch (err) {
      throw new Error("No ethereum object.", err);
    }
  };

  const handleChange = (e, name) => {
    setFormData((prev) => ({ ...prev, [name]: e.target.value }));
  };

  const sendTransaction = async () => {
    try {
      const transactionContract = getEthereumContract();
      const { addressTo, amount, keyword, message } = formData;
      const parsedAmount = ethers.utils.parseEther(amount);
      await ethereum.request({
        method: "eth_sendTransaction",
        params: [
          {
            from: accounts,
            to: addressTo,
            gas: "0x5208",
            value: parsedAmount._hex,
          },
        ],
      });
      console.log(transactionContract);
      const transactionHash = await transactionContract.addToBlockchain(
        addressTo,
        parsedAmount,
        keyword,
        message
      );
      await transactionHash.wait();
      const transactionCount = await transactionContract.getTransactionCount();
      setTransactionCount(transactionCount);
    } catch (err) {
      throw new Error("No ethereum object.", err);
    }
  };

  useEffect(() => {
    isConnected();
  }, []);
  return (
    <TransactionContext.Provider
      value={{
        connectWallet,
        accounts,
        formData,
        sendTransaction,
        handleChange,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
};
