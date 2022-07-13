import { ExpenseItem } from "./ExpenseItems"
import "./ExpensesList.css"
export const ExpensesList = ({ filterExpenses }: { filterExpenses: Array<any> }) => {
    if (filterExpenses.length === 0) {
        return <p className="expenses-list__fallback">No expenses found.</p>;
    }
    return (
        <ul className="expenses-list">
            {
                filterExpenses.map((expenseItem) => (
                    <ExpenseItem
                        key={expenseItem.id}
                        itemTitle={expenseItem.itemTitle}
                        itemDate={expenseItem.itemDate}
                        itemPrice={expenseItem.itemPrice}
                    />
                ))
            }
        </ul>
    );
}