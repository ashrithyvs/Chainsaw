/* eslint-disable no-lone-blocks */
import { useContext, useEffect } from "react";
import { TransactionContext } from "./contexts/TransactionsContext";
import "./App.css";
import { Navbar, Hero, Services, Footer } from "./components";
function App() {
  const { connectWallet, accounts, formData, sendTransaction, handleChange } =
    useContext(TransactionContext);

  const handleSubmit = (e) => {
    const { addressTo, amount, keyword, message } = formData;
    console.log(formData);
    e.preventDefault();
    if (addressTo && amount && keyword && message) {
      sendTransaction();
    } else return;
  };

  useEffect(() => {
    connectWallet();
  }, []);
  return (
    <div
      className="bg-black text-white"
      style={{ fontFamily: "Poppins,sans-serif" }}
    >
      <Navbar />
      <Hero />
      <Services />
      <Footer />
    </div>
  );
}

{
  /* <>
        <input
          type="text"
          name="addressTo"
          placeholder="Address To"
          onChange={(e) => handleChange(e, e.target.name)}
        />{" "}
        <input
          type="number"
          name="amount"
          placeholder="Amount"
          onChange={(e) => handleChange(e, e.target.name)}
        />{" "}
        <input
          type="text"
          name="keyword"
          placeholder="Keyword"
          onChange={(e) => handleChange(e, e.target.name)}
        />{" "}
        <input
          type="text"
          name="message"
          placeholder="Message"
          onChange={(e) => handleChange(e, e.target.name)}
        />
        <button onClick={handleSubmit}>Submit</button>
      </> */
}

export default App;
