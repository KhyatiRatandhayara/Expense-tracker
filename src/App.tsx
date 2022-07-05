import React, { useState } from "react";
import "./App.css";
import { Expenses } from "./components/Expenses/Expenses";
import { NewExpense } from "./components/NewExpense/NewExpense";

const expenseItems = [
  {
    id: Math.random.toString(),
    itemTitle: "item1",
    itemDate: new Date(),
    itemPrice: +Math.random().toFixed(4),
  },
  {
    id: Math.random.toString(),
    itemTitle: "item2",
    itemDate: new Date(),
    itemPrice: +Math.random().toFixed(4),
  },
];

const App = () => {
  const [newExpenseItem, setNewExpenseItem] = useState(expenseItems);
  const newExpenseHandler = (newExpense: any) => {
    //combine new expense with existing expenses
    setNewExpenseItem((prevExpenses) => {
      return [newExpense, ...prevExpenses];
    });
  };
  return (
    <div className="App">
      <header className="App-header">
        <NewExpense onAddExpense={newExpenseHandler} />
        <Expenses expenseItems={expenseItems} />
      </header>
    </div>
  );
};

export default App;
