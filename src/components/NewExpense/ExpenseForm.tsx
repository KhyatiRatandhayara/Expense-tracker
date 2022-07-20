import { useState, useEffect } from "react";
import moment from "moment";
import "./ExpenseForm.css";
import { ErrorModal } from "./ErrorModal";

export const ExpenseForm = (props: any) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [error, setError] = useState("");
  const [showErrorModal, setShowErrorModal] = useState(false);


  const titleChangehandler = (event: any) => {
    setEnteredTitle(event.target.value);
  };
  const amountChangehandler = (event: any) => {
    setEnteredAmount(event.target.value);
  };
  const dateChangehandler = (event: any) => {
    setEnteredDate(event.target.value);
  };
  const submitHandler = (event: any) => {

    event.preventDefault();

    if (enteredTitle.trim().length === 0 || enteredTitle.trim().length == 1) {
      setShowErrorModal(true);
      setError('wrong title');
      return;
    }
    if (!moment(enteredDate, 'DD-MM-YYYY').isValid()) {
      setShowErrorModal(true);
      setError('wrong date');
      return;
    }
    if (isNaN(+enteredAmount) || enteredAmount.length == 0) {
      setShowErrorModal(true);
      setError('wrong amount');
      return;

    }
    const expenseData = {
      id: Math.random.toString(),
      itemTitle: enteredTitle,
      itemDate: new Date(enteredDate),
      itemPrice: +enteredAmount,
    };

    props.onSaveExpenseData(expenseData);

    //clear form data after submit the form
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");

    //for closing the modal after form submission
    props.onCloseModal(false);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label                         >Title</label>
          <input
            type="text"
            onChange={titleChangehandler}
            value={enteredTitle}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangehandler}
            value={enteredAmount}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChangehandler}
            value={enteredDate}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit" className="add-expense-btn">
          Add Expense
        </button>
        {error && <ErrorModal setShowErrorModal={setShowErrorModal} error={error} />}
      </div>
    </form>
  );
};
