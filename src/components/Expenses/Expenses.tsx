import { ExpenseItem } from "./ExpenseItems";
import { Card } from "../UI/Card";
import "./Expenses.css";

export const Expenses = ({ expenseItems }: { expenseItems: Array<any> }) => {
  return (
    <Card className="expenses">
      {expenseItems.map((expenseItem) => (
        <ExpenseItem
          itemTitle={expenseItem.itemTitle}
          itemDate={expenseItem.itemDate}
          itemPrice={expenseItem.itemPrice}
        />
      ))}
    </Card>
  );
};
