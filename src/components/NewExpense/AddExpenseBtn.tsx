import { useState } from "react";
import { Modal } from "./Modal";
import {Fragment} from "react";

export const AddExpenseBtn = ({ onAddExpenseData }: any) => {
  const [showModal, setShowModal] = useState(false);
  const showModalHandler = () => {
    setShowModal(true);
  };
  const addExpenseHandler = (newExpense: any) => {
    const expenseData = {
      ...newExpense,
      id: Math.random.toString(),
    };
    onAddExpenseData(expenseData);
  };

  return (
    <Fragment>
      <button className="new-expense-btn" onClick={showModalHandler}>
        Add Expense
      </button>
      {showModal ? (
        <Modal setShowModal={setShowModal} onAddExpense={addExpenseHandler} />
      ) : null}
    </Fragment>
  );
};
