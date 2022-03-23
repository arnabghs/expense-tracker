import React, {useEffect, useState} from 'react';

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

const Expenses = (props: any) => {
    const [year, setYear] = useState('2020')

    const handleYearFiltering = (year: string) => {
        setYear(year)
    }

    const expensesByYear = props.items.filter((expense: any) => expense.date.getFullYear().toString() === year)

    return (
        <Card className="expenses">
            <ExpensesFilter selected={year} onYearFilter={handleYearFiltering}/>
            <ExpensesList items={expensesByYear}/>
        </Card>
    );
}

export default Expenses;