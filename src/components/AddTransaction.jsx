import { useState } from "react";
import { useContext } from "react";
import { GlobalContext } from "./context/GlobalState";
export default function AddTransaction() {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  const { addTransaction } = useContext(GlobalContext);

  function onSubmit(e) {
    e.preventDefault();
    const newTransaction = {
      id: Math.floor(Math.random() * 1000000),
      text,
      amount: +amount,
    };
    addTransaction(newTransaction);
  }
  return (
    <>
      <h1>Add New Transaction</h1>
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="text">Text</label>
          <input
            type="text"
            placeholder="Enter name of the product"
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div>
          <h3>Amount</h3>
          <p>negative - expense AND positive - income</p>
          <input
            type="number"
            placeholder="Enter amount"
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <button className="btn">Add Transaction</button>
      </form>
    </>
  );
}
