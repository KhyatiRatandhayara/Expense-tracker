import React from "react";
import "./App.css";
import { Expenses } from "./components/Expenses";

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
        <Expenses expenseItems={expenseItems} />
      </header>
    </div>
  );
}

export default App;
