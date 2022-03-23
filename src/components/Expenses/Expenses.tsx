import React, {useEffect, useState} from 'react';

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props: any) => {
    const [year, setYear] = useState('2020')

    const handleYearFiltering = (year: string) => {
        setYear(year)
    }

    const expensesByYear = props.items.filter((expense : any)  => expense.date.getFullYear().toString() === year)

    return (
        <Card className="expenses">
            <ExpensesFilter selected={year} onYearFilter={handleYearFiltering}/>
            {expensesByYear.map((expense: any) => {
                return <ExpenseItem
                    key = {expense.id}
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date}
                />
            })}
        </Card>
    );
}

export default Expenses;