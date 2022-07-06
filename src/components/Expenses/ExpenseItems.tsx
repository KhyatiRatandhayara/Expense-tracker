import "./ExpenseItem.css";
import { ExpenseDate } from "./ExpenseDate";
import { Card } from "../UI/Card";
import { useState } from "react";
import { DeleteExpenseModal } from "../DeleteExpense/DeleteExpenseModal";


interface ExpenseProps {
  itemTitle: string;
  itemDate: Date;
  itemPrice: number;
}

export const ExpenseItem = ({
  itemTitle,
  itemDate,
  itemPrice,
}: ExpenseProps) => {

  const [showExpenseDeleteModal, setShowExpenseDeleteModal] = useState(false);
  const showDeleteModalHandler = () => {
    setShowExpenseDeleteModal(true);
  };
  return (
    <Card className="expense-item">
      <ExpenseDate itemDate={itemDate} />
      <div className="expense-item__description">
        <h2>{itemTitle}</h2>
        <div className="expense-item__price">${itemPrice}</div>
        <button className="delete-expense-btn" onClick={showDeleteModalHandler}>X</button>
        {showExpenseDeleteModal ? (
          <DeleteExpenseModal setShowExpenseDeleteModal={setShowExpenseDeleteModal} />
        ) : null}
      </div>
    </Card>
  );
};
