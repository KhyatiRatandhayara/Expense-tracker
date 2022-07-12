import { useState } from "react";
import "./ExpensesFilter.css";

export const ExpenseFilter = (props: any) => {

    const yearFilterHandler = (event: any) => {
        props.onExpenseYearFilter(event.target.value);
    }

    return (
        <div className='expenses-filter'>
            <div className='expenses-filter__control'>
                <label>Filter by year</label>
                <select onChange={yearFilterHandler} value={props.selected}>
                    <option value='2022'>2022</option>
                    <option value='2021'>2021</option>
                    <option value='2020'>2020</option>
                    <option value='2019'>2019</option>
                </select>
            </div>
        </div>
    );
}