import "./ExpenseItem.css";
import { ExpenseDate } from "./ExpenseDate";
import { Card } from "../UI/Card";
interface ExpenseProps {
  itemId: string;
  itemTitle: string;
  itemDate: Date;
  itemPrice: number;
  itemArray: Array<any>;
}

export const ExpenseItem = ({
  itemId,
  itemTitle,
  itemDate,
  itemPrice,
  itemArray,
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
