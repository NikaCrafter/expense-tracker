import { GlobalContext } from "./context/GlobalState";
import { useContext } from "react";

export default function BalanceFlow() {
    const {transactions} = useContext(GlobalContext); 
    const amount = transactions.map(transaction => transaction.amount);
    const income = amount.filter(item => item > 0).reduce((acc,curr) => acc + curr,0).toFixed(2);
    const expense = amount.filter(item => item < 0).reduce((acc,curr) => acc + curr * -1 ,0).toFixed(2) ;
    return (
        <>
            <div className="inc-exp-container ">
                <div >
                    <h1>Income</h1>
                    <h2 className="money plus">${income}</h2>
                </div>
                <div>
                    <h1>Expense</h1>
                    <h2 className="money minus">${expense}</h2>
                </div>
            </div>
        </>
    );
}