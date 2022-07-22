import "./ExpenseItem.css";
import { ExpenseDate } from "./ExpenseDate";
import { Card } from "../UI/Card";
import { DeleteExpenseModal } from "../DeleteExpense/DeleteExpenseModal";
import { useState } from "react";
import { EditModal } from "../EditExpense/EditModal";
interface ExpenseProps {
  itemId: string;
  itemTitle: string;
  itemDate: Date;
  itemPrice: number;
  onDeleteExpense: any;
  onEditExpense : any
}

export const ExpenseItem = ({
  itemId,
  itemTitle,
  itemDate,
  itemPrice,
  onDeleteExpense,
  onEditExpense
}: ExpenseProps) => {
  const [showDeleteExpenseModal, setShowDeleteExpenseModal] = useState(false);
  const [showEditExpenseModal, setShowEditExpenseModal] = useState(false);
  const deleteExpenseHandler = (deleteExpenseId: string) => {
    onDeleteExpense(deleteExpenseId);
  };
  const editExpenseDataHandler = (editedData: any) => {
    onEditExpense(editedData);
  };
  const editExpenseData = { itemId, itemTitle, itemDate, itemPrice };

  return (
    <Card className="expense-item">
      <ExpenseDate itemDate={itemDate} />
      <div className="expense-item__description">
        <h2>{itemTitle}</h2>
        <div className="expense-item__price">${itemPrice}</div>
      </div>
      <button
        onClick={() => setShowDeleteExpenseModal(true)}
        className="delete__expense"
      >
        X
      </button>
      <button
        className="edit__expense"
        onClick={() => setShowEditExpenseModal(true)}
      >
        Edit
      </button>
      {showDeleteExpenseModal && (
        <DeleteExpenseModal
          setShowExpenseDeleteModal={setShowDeleteExpenseModal}
          itemId={itemId}
          onDeleteExpenseHandler={deleteExpenseHandler}
        />
      )}
      {showEditExpenseModal && (
        <EditModal
          editExpenseData={editExpenseData}
          setShowEditExpenseModal={setShowEditExpenseModal}
          onEditedExpense={editExpenseDataHandler}
        />
      )}
    </Card>
  );
};
