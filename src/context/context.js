import React, { useReducer, createContext } from "react";

import contextReducer from "./contextReducer.js";

const initialState = JSON.parse(localStorage.getItem('transactions')) || [{"amount":10,"category":"Investments","type":"Income","date":"2020-12-25","id":"d45bace1-e10e-4a32-9cec-73a49ea8aed4"},{"amount":50,"category":"Internet","type":"Expense","date":"2020-12-25","id":"e8b4779a-7493-41b6-adad-19974a587487"},{"amount":100,"category":"Food","type":"Expense","date":"2020-12-25","id":"a60d1222-e7ab-45fb-b8da-e79cc993794b"},{"amount":150,"category":"Gifts","type":"Income","date":"2020-12-25","id":"1824b004-45ee-4ece-a021-450fe09c34ff"},{"amount":250,"category":"Salary","type":"Income","date":"2020-12-25","id":"8039e865-f7fd-4ac3-aab1-9d6b3da6c9b3"}];

export const ExpenseTrackerContext = createContext(initialState);

export const Provider = ({ children }) => {
  const [transactions, dispatch] = useReducer(contextReducer, initialState);

  // Action Creators
  const deleteTransaction = (id) => {
    dispatch({ type: "DELETE_TRANSACTION", payload: id });
  };
  const addTransaction = (transaction) => {
    dispatch({ type: "ADD_TRANSACTION", payload: transaction });
  };

  const balance = transactions.reduce((acc, currVal) => {
      return (currVal.type === 'Income' ? acc + currVal.amount : acc - currVal.amount)
  },0 );

  return (
    <ExpenseTrackerContext.Provider value={{ 
        deleteTransaction,
        addTransaction,
        transactions,
        balance
     }}>
      {children}
    </ExpenseTrackerContext.Provider>
  );
};
