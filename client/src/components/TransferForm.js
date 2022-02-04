import { useContext } from "react";
import { TransactionContext } from "../contexts/TransactionsContext";
export default function TransferForm() {
  const { formData, sendTransaction, handleChange } =
    useContext(TransactionContext);

  const handleSubmit = (e) => {
    const { addressTo, amount, keyword, message } = formData;
    console.log(formData);
    e.preventDefault();
    if (addressTo && amount && keyword && message) {
      sendTransaction();
    } else return;
  };
  const InputStyle =
    "mx-auto lg:w-9/10 w-3/4 bg-slate-800 rounded-lg p-2 text-white outline-none";

  return (
    <div className="bg-slate-900 lg:w-5/6 w-full mx-auto py-10 rounded-2xl flex flex-col justify-center">
      <div className="flex flex-col space-y-2">
        <input
          type="text"
          name="addressTo"
          placeholder="Address To"
          onChange={(e) => handleChange(e, e.target.name)}
          className={InputStyle}
        />{" "}
        <input
          type="number"
          name="amount"
          placeholder="Amount"
          step={0.001}
          onChange={(e) => handleChange(e, e.target.name)}
          className={InputStyle}
        />{" "}
        <input
          type="text"
          name="keyword"
          placeholder="Keyword"
          onChange={(e) => handleChange(e, e.target.name)}
          className={InputStyle}
        />{" "}
        <input
          type="text"
          name="message"
          placeholder="Message"
          onChange={(e) => handleChange(e, e.target.name)}
          className={InputStyle}
        />
      </div>
      <div className="bg-slate-400 h-px w-5/6 mx-auto my-3" />
      <button
        onClick={handleSubmit}
        className="bg-transparent hover:bg-slate-800 w-5/6 h-10 mx-auto border-slate-500 border-2 rounded-full"
      >
        Send now!
      </button>
    </div>
  );
}
