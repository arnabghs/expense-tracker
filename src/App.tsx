import React, {useState} from 'react';

import Expenses from './components/Expenses/Expenses';
import NewExpense from "./components/NewExpense/NewExpense";

export interface Expense {
    id : String
    title : string
    amount : number
    date : Date
}

const App = () => {
    const expenses = [
        {id: 'e1', title: 'Toilet Paper', amount: 94.12, date: new Date(2020, 7, 14)},
        {id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12)},
        {id: 'e3', title: 'Mobile', amount: 400.49, date: new Date(2021, 5, 12)},
        {id: 'e4', title: 'Headphone', amount: 799.49, date: new Date(2020, 2, 12)},
    ];

    const [expenseList, updateExpenseList] = useState<Expense[]>(expenses)

    const addExpenseHandler = (expense: Expense) => {
        updateExpenseList((prevList: Expense[]) => [expense, ...prevList])
    }

    return (
        <div>
            <NewExpense onAddExpense={addExpenseHandler}/>
            <Expenses items={expenseList}/>
        </div>
    );
}

export default App;