import { ExpenseForm } from "./ExpenseForm";
import "./Modal.css";
export const Modal = ({ setShowModal, onAddExpense }: any) => {
  const saveExpenseDataHandler = (enteredExpenseData: any) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    onAddExpense(expenseData);
  };
  return (
    <div id="portal">
      <div className="container">
        <div className="modal">
          <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
        </div>
      </div>
    </div>
  );
};
