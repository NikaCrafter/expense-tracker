import {useContext} from "react";
import {GlobalContext} from "./context/GlobalState.jsx";
import Transaction from "./Transaction.jsx";
export default function TransactionList() {
   const {transactions} = useContext(GlobalContext);
   return (
    <>
    <h1>History</h1>
    <hr />
    <ul className="list">
        {transactions.map(transaction => (
            <Transaction key={transaction.id} transaction={transaction}/>
        ))} 
    </ul>
    </>
   );

}