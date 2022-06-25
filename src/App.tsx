import React from "react";
import "./App.css";
import { ExpenseItem } from "./components/ExpenseItems";

const expenseItems = [
  {
    itemTitle: "item1",
    itemDate: new Date(),
    itemPrice: +Math.random().toFixed(4),
  },
  {
    itemTitle: "item2",
    itemDate: new Date(),
    itemPrice: +Math.random().toFixed(4),
  },
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ExpenseItem
          itemTitle={expenseItems[0].itemTitle} //itemTitle,itemDate,itemPrice is props
          itemDate={expenseItems[0].itemDate}
          itemPrice={expenseItems[0].itemPrice}
        />
        <ExpenseItem
          itemTitle={expenseItems[1].itemTitle} //itemTitle,itemDate,itemPrice is props
          itemDate={expenseItems[1].itemDate}
          itemPrice={expenseItems[1].itemPrice}
        />
      </header>
    </div>
  );
}

export default App;
