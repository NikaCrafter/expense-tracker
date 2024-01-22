import { GlobalContext } from "./context/GlobalState";
import { useContext } from "react";

export default function Balance() {
    
    const {transactions} = useContext(GlobalContext);
    const amount = transactions.map(transaction => transaction.amount);
    const total = amount.reduce((acc,curr) => acc+curr,0).toFixed(2);

    console.log(total);
    return (
        <>
        <div className="container" >
        <h2>Your Balance</h2>
        <h1>${total}</h1>
        </div>
        </>
    );
}