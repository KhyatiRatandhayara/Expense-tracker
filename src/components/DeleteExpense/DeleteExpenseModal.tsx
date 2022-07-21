import React, { useRef } from "react";
import './DeleteExpenseModal.css';

export const DeleteExpenseModal = ({ setShowExpenseDeleteModal, itemId, onDeleteExpenseHandler }: any) => {
    const modalRef = useRef() as React.MutableRefObject<HTMLInputElement>;
    const closeModal = (e: any) => {
        if (e.target === modalRef.current) {
            setShowExpenseDeleteModal(false);
        }
    };
    const expenseDeleteHandler = (props: any) => {
        onDeleteExpenseHandler(props.target.id);
    }
    return (
        <div id="portal">
            <div className="container" ref={modalRef} onClick={closeModal}>
                <div className="modal">
                    <button className="modal-close-btn" onClick={() => setShowExpenseDeleteModal(false)}>X</button>
                    <div className="modal-body">
                        Are you sure you want to delete this expense?
                    </div>
                    <div className="modal-footer">
                        <button id={itemId} onClick={expenseDeleteHandler}>Delete</button>
                        <button onClick={() => setShowExpenseDeleteModal(false)}>Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
//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