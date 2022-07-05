import "./NewExpense.css";
import { AddExpenseBtn } from "./AddExpenseBtn";

export const NewExpense = ({ onAddExpense }: any) => {
  const newExpenseDataHandler = (newExpense: any) => {
    const expenseData = {
      ...newExpense,
      id: Math.random().toString(),
    };
    onAddExpense(expenseData);
  };
  return <AddExpenseBtn onAddExpenseData={newExpenseDataHandler} />;
};
