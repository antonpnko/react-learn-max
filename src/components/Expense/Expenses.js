import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import {useState} from "react";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState('2021')
  const selectedYear = (year) => {
    console.log('year', year)
    setFilteredYear(year)
  }
  return (
    <Card className="expenses">
      <ExpensesFilter selected={filteredYear} onFilterChange={selectedYear}/>
      {props.items.map(expense => <ExpenseItem title={expense.title} amount={expense.amount} date={expense.date} />)}
    </Card>
  );
}

export default Expenses;
