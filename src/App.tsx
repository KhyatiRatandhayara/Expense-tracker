import React, { useState } from "react";
import "./App.css";
import { Expenses } from "./components/Expenses/Expenses";
import { NewExpense } from "./components/NewExpense/NewExpense";

const App = () => {
  var expenseItems = [
    {
      id: Math.random().toString(16).slice(2),
      itemTitle: "item1",
      itemDate: new Date(2020, 7, 17),
      itemPrice: +Math.random().toFixed(4),
    },
    {
      id: Math.random().toString(16).slice(2),
      itemTitle: "item2",
      itemDate: new Date(2022, 10, 16),
      itemPrice: +Math.random().toFixed(4),
    },
  ];
  const [newExpenseItem, setNewExpenseItem] = useState(expenseItems);
  const newExpenseHandler = (newExpense: any) => {
    setNewExpenseItem((prevExpenses) => {
      //combine new expense with existing expenses
      return [newExpense, ...prevExpenses];
    });
  };
  const  deleteExpenseHandler = (expenseId : string) => {
    const newExpensesArray = newExpenseItem.filter(expense => expense.id !==  expenseId);
    setNewExpenseItem(newExpensesArray);
  }
  const editExpenseHandler = (editedExpenseData : any) => {
    const editedExpenseArray= newExpenseItem.map(expense => {
      if (expense.id === editedExpenseData.id){
        return {...editedExpenseData}; //gets everything that was already in item, and updates "done"
      }
      return expense; // else return unmodified expense 
    })
  setNewExpenseItem(editedExpenseArray);
  }

  return (
    <div className="App">
      <header className="App-header">
        <NewExpense onAddExpense={newExpenseHandler} />
        <Expenses expenseItems={newExpenseItem} onDeleteExpense= {deleteExpenseHandler} onEditExpenseHandler= {editExpenseHandler} />
      </header>
    </div>
  );
};

export default App;
