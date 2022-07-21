import "./ExpenseItem.css";
import { ExpenseDate } from "./ExpenseDate";
import { Card } from "../UI/Card";
import {DeleteExpenseModal} from "../DeleteExpense/DeleteExpenseModal";
import { useState } from "react";
interface ExpenseProps {
  itemId: string;
  itemTitle: string;
  itemDate: Date;
  itemPrice: number;
  onDeleteExpense : any
}


export const ExpenseItem = ({
  itemId,
  itemTitle,
  itemDate,
  itemPrice,
  onDeleteExpense
}: ExpenseProps) => {
  const [showDeleteExpenseModal , setShowDeleteExpenseModal] = useState(false);
  const deleteExpenseHandler = (deleteExpenseId : string) => {
    onDeleteExpense(deleteExpenseId);
  }
  return (
    <Card className="expense-item">
      <ExpenseDate itemDate={itemDate} />
      <div className="expense-item__description">
        <h2>{itemTitle}</h2>
        <div className="expense-item__price">${itemPrice}</div>
      </div>
      <button onClick={() => setShowDeleteExpenseModal(true)} className="delete__expense">X</button>
      {showDeleteExpenseModal && <DeleteExpenseModal setShowExpenseDeleteModal={setShowDeleteExpenseModal} itemId= {itemId} onDeleteExpenseHandler = {deleteExpenseHandler}/>
      }
    </Card>
  );
};
