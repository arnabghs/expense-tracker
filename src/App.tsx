import React, {useState} from 'react';

import Expenses from './components/Expenses/Expenses';
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
    const expenses = [
        {id: 'e1', title: 'Toilet Paper', amount: 94.12, date: new Date(2020, 7, 14)},
        {id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12)},
    ];

    const [expenseList, updateExpenseList] = useState(expenses)

    const addExpenseHandler = (expense: any) => {
        updateExpenseList((prevList: any[]) => [expense, ...prevList])
    }

    return (
        <div>
            <NewExpense onAddExpense={addExpenseHandler}/>
            <Expenses items={expenseList}/>
        </div>
    );
}

export default App;