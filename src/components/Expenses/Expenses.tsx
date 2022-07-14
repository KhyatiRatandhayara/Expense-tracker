import { Card } from "../UI/Card";
import "./Expenses.css";
import { ExpenseFilter } from "./ExpensesFilter";
import { useState } from "react";
import { ExpensesList } from "./ExpensesList";
import { ExpensesChart } from "./ExpensesChart";

export const Expenses = ({ expenseItems }: { expenseItems: Array<any> }) => {
  const [filteredYear, setFilteredYear] = useState("2022");

  const ExpenseYearFilterHandler = (enteredYear: any) => {
    setFilteredYear(enteredYear);
  };
  const filterExpenses = expenseItems.filter((expense) => {
    return expense.itemDate.getFullYear().toString() === filteredYear;
  });
  return (
    <Card className="expenses">
      <ExpenseFilter
        onExpenseYearFilter={ExpenseYearFilterHandler}
        selected={filteredYear}
      />
      <ExpensesChart expenses={filterExpenses} />
      <ExpensesList filterExpenses={filterExpenses} expenseItemsArray = {expenseItems}/>
    </Card>
  );
};
/**
 * 
key -- use in react custom component and HTML inbuild component

when we use map function to render the component must add prop "key" in that component 
for unique id or we can use second argument of map function which is inbuilt "index" argument but it is not everytime unique.

For no expense found case
->We can use ternory operator
->We can store "<p>No expense found</p>" in variable and display that variable.
->We use && operator -- if before the && operator condition is true than it return the after the && operator value.
 */
