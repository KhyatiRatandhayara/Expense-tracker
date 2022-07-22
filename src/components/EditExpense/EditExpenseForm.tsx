import moment from "moment";
import { useRef } from "react";

export const EditExpenseForm = ({editExpenseData,onEditExpenseHandler,setShowEditExpenseModal} : any) => {
const expenseDataDate = moment(editExpenseData.itemDate).format('YYYY-MM-DD');

const editedTitle = useRef() as React.MutableRefObject<HTMLInputElement>; 
const editedAmount = useRef() as React.MutableRefObject<HTMLInputElement>;
const editedDate = useRef() as React.MutableRefObject<HTMLInputElement>;
 //moment(editedDate.current.value).format('DD-MM-YYYY')

const editSubmitHandler = (event: any) => {
      event.preventDefault();
      const editedExpenseData = {
        id : editExpenseData.itemId,
        itemTitle: editedTitle.current.value,
        itemPrice : +editedAmount.current.value,
        itemDate : new Date(editedDate.current.value)
      };  
      onEditExpenseHandler(editedExpenseData);
      //closing the modal after edited the data
      setShowEditExpenseModal(false);
      
}
   return(
    <form onSubmit={editSubmitHandler}>
    <div className="new-expense__controls">
      <div className="new-expense__control">
        <label>Title</label>
        <input type="text" defaultValue={editExpenseData.itemTitle} ref = {editedTitle}/>
      </div>
      <div className="new-expense__control">
        <label>Amount</label>
        <input
          type="number"
          min="0.01"
          step="0.01"
          defaultValue={editExpenseData.itemPrice}
          ref = {editedAmount}
        />
      </div>
      <div className="new-expense__control">
        <label>Date</label>
        <input
          type="date"
          min="2019-01-01"
          max="2022-12-31"
          defaultValue={expenseDataDate}
          ref = {editedDate}
        />
      </div>
    </div>
    <div className="new-expense__actions">
      <button type="submit" className="add-expense-btn">
        Edit Expense
      </button>
    </div>
  </form>
   );
}