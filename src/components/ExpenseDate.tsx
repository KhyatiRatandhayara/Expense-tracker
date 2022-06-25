export const ExpenseDate = ({ itemDate }: { itemDate: Date }) => {
  const month = itemDate.toLocaleString("en-US", { month: "long" });
  const day = itemDate.toLocaleString("en-US", { day: "2-digit" });
  const year = itemDate.getFullYear();

  return (
    <div>
      <div>{month}</div>
      <div>{year}</div>
      <div>{day}</div>
    </div>
  );
};
