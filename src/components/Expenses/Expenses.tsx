import { ExpenseItem } from "./ExpenseItems";
import { Card } from "../UI/Card";
import "./Expenses.css";
import { ExpenseFilter } from "./ExpensesFilter";
import { useState } from "react";

export const Expenses = ({ expenseItems }: { expenseItems: Array<any> }) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const ExpenseYearFilterHandler = (enteredYear: any) => {
    setFilteredYear(enteredYear);
    console.log(enteredYear);
  }
  const filterExpenses = expenseItems.filter(expense => {
    return expense.itemDate.getFullYear().toString === filteredYear;
  });
  return (
    <Card className="expenses">
      <ExpenseFilter onExpenseYearFilter={ExpenseYearFilterHandler} selected={filteredYear} />
      {expenseItems.map((expenseItem) => (
        <ExpenseItem
          key={expenseItem.id}
          itemTitle={expenseItem.itemTitle}
          itemDate={expenseItem.itemDate}
          itemPrice={expenseItem.itemPrice}
        />
      ))}
    </Card>
  );
};
/**
 * key -- use in react custom component and HTML inbuild component

when we use map function to render the component must add prop "key" in that component 
for unique id or we can use second argument of map function which is inbuilt "index" argument but it is not everytime unique.
 */