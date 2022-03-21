import React from 'react';
import './NewExpense.css';
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props : any) => {
    const saveExpenseDataHAndler = (enteredExpenseData : any) => {
        const expenseData = {
            ...enteredExpenseData,
            id : Math.random().toString()
        }

        props.onAddExpense(expenseData)
    }

    return <div className="new-expense">
        <ExpenseForm onSaveExpenseData={saveExpenseDataHAndler}/>
    </div>
}

export default NewExpense