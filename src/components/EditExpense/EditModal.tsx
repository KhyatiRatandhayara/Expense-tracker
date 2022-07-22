import React, { useRef } from "react";
import { EditExpenseForm } from "./EditExpenseForm";

export const EditModal = ({setShowEditExpenseModal,editExpenseData,onEditedExpense}: any) => {
   
  // close the modal when clicking outside the modal.
  const modalRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  const closeModal = (e: any) => {
    if (e.target === modalRef.current) {
        setShowEditExpenseModal(false);
    }
  };
  const editExpenseHandler = (editedExpenseData : any) => {
    onEditedExpense(editedExpenseData);
  }
  return (
    <div id="portal">
      <div className="container" ref={modalRef} onClick={closeModal}>
        <div className="modal">
          <button className="modal-close-btn" onClick={()=> setShowEditExpenseModal(false)}>X</button>
          <EditExpenseForm editExpenseData={editExpenseData} onEditExpenseHandler= {editExpenseHandler} setShowEditExpenseModal= {setShowEditExpenseModal}/>
        </div>
      </div>
    </div>
  );
};
