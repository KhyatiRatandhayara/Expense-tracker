import { ExpenseItem } from "./ExpenseItems";
import { Card } from "./Card";

export const Expenses = ({ expenseItems }: { expenseItems: Array<any> }) => {
  let expenseArray = [];
  for (let i = 0; i < expenseItems.length; i++) {
    expenseArray.push(
      <ExpenseItem
        itemTitle={expenseItems[i].itemTitle} //itemTitle,itemDate,itemPrice is props
        itemDate={expenseItems[i].itemDate}
        itemPrice={expenseItems[i].itemPrice}
      />
    );
  }
  return <Card className="expenses">{expenseArray}</Card>;
};
