import "./ExpenseDate.css";

export const ExpenseDate = ({ itemDate }: { itemDate: Date }) => {
  const month = itemDate.toLocaleString("en-US", { month: "long" });
  const day = itemDate.toLocaleString("en-US", { day: "2-digit" });
  const year = itemDate.getFullYear();

  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  );
};
