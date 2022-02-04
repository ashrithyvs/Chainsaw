/* eslint-disable no-lone-blocks */
import "./App.css";
import { Navbar, Hero, Services, Footer } from "./components";
function App() {
  return (
    <div
      className="gradient-bg-welcome flex flex-col text-white"
      style={{ fontFamily: "Poppins,sans-serif" }}
    >
      <Navbar />
      <Hero />
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
