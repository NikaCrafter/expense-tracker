import { useState, useReducer  } from 'react'
import './App.css'
import Balance from "./components/Balance.jsx";
import BalanceFlow from "./components/BalanceFlow.jsx";
import AddTransaction from './components/AddTransaction';
import TransactionList from './components/TransactionList';
import { GlobalProvider } from './components/context/GlobalState.jsx';
function App() {

  return (
    <GlobalProvider>
    <h1>Expense Tracker</h1>
     <Balance />
     <BalanceFlow />
     <TransactionList />
     <AddTransaction />
    </GlobalProvider>
  )
}

export default App
