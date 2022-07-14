import React, { useRef } from "react";
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
  // close the modal when clicking outside the modal.
  const modalRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  const closeModal = (e: any) => {
    if (e.target === modalRef.current) {
      setShowModal(false);
    }
  };
  return (
    <div id="portal">
      <div className="container" ref={modalRef} onClick={closeModal}>
        <div className="modal">
          <button className="modal-close-btn" onClick={() => setShowModal(false)}>X</button>
          <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCloseModal={setShowModal}/>
        </div>
      </div>
    </div>
  );
};
