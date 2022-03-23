import React, {useState} from 'react';
import './ExpenseForm.css';
import exp from "constants";

const ExpenseForm = (props : any) => {
    const [title, setTitle] = useState('')
    const [amount, setAmount] = useState('')
    const [date, setDate] = useState('')

    const titleChangeHandler = (event: any) => {
        setTitle(event.target.value)
    }

    const amountChangeHandler = (event: any) => {
        setAmount(event.target.value)
    }

    const dateChangeHandler = (event: any) => {
        setDate(event.target.value)
    }

    const submitHandler = (event: any) => {
        event.preventDefault()

        const expenseData = {
            title: title,
            amount: amount,
            date: new Date(date)
        }

        props.onSaveExpenseData(expenseData)

        setTitle('')
        setAmount('')
        setDate('')
    }

    return <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input type='text' value={title} onChange={titleChangeHandler}/>
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input type='number' min="0.01" value={amount} step="0.01" onChange={amountChangeHandler}/>
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input type='date' min="2020-01-01" max="2023-12-31" value={date} onChange={dateChangeHandler}/>
            </div>
        </div>
        <div className="new-expense__actions">
            <button onClick={props.onCancel}> Cancel</button>
            <button type="submit"> Add Expense</button>
        </div>
    </form>
}

export default ExpenseForm