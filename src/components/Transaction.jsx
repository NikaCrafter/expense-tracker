import { GlobalContext } from "./context/GlobalState";
import { useContext } from "react";
export default function Transaction({ transaction }) {
    console.log("Rendering transaction:", transaction);
  const { deleteTransaction } = useContext(GlobalContext);
  const sign = transaction.amount < 0 ? "-" : "+";
  return (
    <li className={sign === "-" ? "minus" : "plus"}>
      {transaction.text}{" "}
      <span>
        {sign}${Math.abs(transaction.amount)}
      </span>
      <button className="delete-btn" onClick={() => deleteTransaction(transaction.id)}>
        X
      </button>
    </li>
  );
}
