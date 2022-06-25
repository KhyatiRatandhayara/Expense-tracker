import "./ExpenseItem.css";
import { ExpenseDate } from "./ExpenseDate";
import { Card } from "./Card";

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
  return (
    <Card className="expense-item">
      <ExpenseDate itemDate={itemDate} />
      <div className="expense-item__description">
        <h2>{itemTitle}</h2>
        <div className="expense-item__price">${itemPrice}</div>
      </div>
    </Card>
  );
};
