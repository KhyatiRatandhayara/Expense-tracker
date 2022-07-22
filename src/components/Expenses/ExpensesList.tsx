import { ExpenseItem } from "./ExpenseItems";
import "./ExpensesList.css";
export const ExpensesList = ({
  filterExpenses,
  expenseItemsArray,
  onDeleteExpense,
  onEditExpenseHandler
}: {
  filterExpenses: Array<any>;
  expenseItemsArray: Array<any>;
  onDeleteExpense : any;
  onEditExpenseHandler : any
}) => {
  if (filterExpenses.length === 0) {
    return <p className="expenses-list__fallback">No expenses found.</p>;
  }
  const deleteExpenseHandler = (expenseId : string) => {
    onDeleteExpense(expenseId);
  }
  const editExpenseHandler =(editExpenseData : any)=> {
    onEditExpenseHandler(editExpenseData);
   
  }
  return (
    <ul className="expenses-list">
      {filterExpenses.map((expenseItem) => (
        <ExpenseItem
          key={expenseItem.id}
          itemTitle={expenseItem.itemTitle}
          itemDate={expenseItem.itemDate}
          itemPrice={expenseItem.itemPrice}
          itemId={expenseItem.id}
          onDeleteExpense = {deleteExpenseHandler}
          onEditExpense = {editExpenseHandler}
        />
      ))}
    </ul>
  );
};
