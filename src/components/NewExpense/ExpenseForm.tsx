import { useState, useRef } from "react";
import moment from "moment";
import "./ExpenseForm.css";
import { ErrorModal } from "./ErrorModal";

export const ExpenseForm = (props: any) => {

  const titleInputRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  const amountInputRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  const dateInputRef = useRef() as React.MutableRefObject<HTMLInputElement>;

  const [error, setError] = useState("");
  const [showErrorModal, setShowErrorModal] = useState(false);

  const submitHandler = (event: any) => {

    event.preventDefault();

    const enteredUserTitle = titleInputRef.current.value;
    const enteredUserAmont = amountInputRef.current.value;
    const enteredUserDate = dateInputRef.current.value;

    if (enteredUserTitle.trim().length === 0 || enteredUserTitle.trim().length === 1) {
      setShowErrorModal(true);
      setError("wrong title");
      return;
    }
    if (!moment(enteredUserDate, "DD-MM-YYYY").isValid()) {
      setShowErrorModal(true);
      setError("wrong date");
      return;
    }
    if (isNaN(+enteredUserAmont) || enteredUserAmont.length === 0) {
      setShowErrorModal(true);
      setError("wrong amount");
      return;
    }
    const expenseData = {
      id: Math.random.toString(),
      itemTitle: enteredUserTitle,
      itemDate: new Date(enteredUserDate),
      itemPrice: +enteredUserAmont,
    };

    props.onSaveExpenseData(expenseData);

    //clear form data after submit the form
    titleInputRef.current.value = '';
    amountInputRef.current.value = '';
    dateInputRef.current.value = '';
    // setEnteredTitle("");
    // setEnteredAmount("");
    // setEnteredDate("");

    //for closing the modal after form submission
    props.onCloseModal(false);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" ref={titleInputRef} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            ref={amountInputRef}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            ref={dateInputRef}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit" className="add-expense-btn">
          Add Expense
        </button>
        {showErrorModal && (
          <ErrorModal setShowErrorModal={setShowErrorModal} error={error} />
        )}
      </div>
    </form>
  );
};
