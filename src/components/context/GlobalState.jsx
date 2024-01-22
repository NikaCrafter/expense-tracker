import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
const initialstate = {
  transactions: [],
};

// Create Context
export const GlobalContext = createContext(initialstate);

// Make Provider
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialstate);

  function deleteTransaction(id) {
    console.log("Deleting transaction with ID:", id);
    dispatch({ type: "DELETE_TRANSACTION", payload: id });
  }

  function addTransaction(transaction) {
    dispatch({
      payload: transaction,
      type: "ADD_TRANSACTION",
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
