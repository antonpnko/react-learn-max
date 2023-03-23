import './ExpensesList.css'
import ExpenseItem from "./ExpenseItem"
const ExpensesList = (props) => {
  console.log('ExpensesList', props.items)
  if(props.items.length === 0){
    return <h2 className='expenses-list__fallback'>Found no expenses.</h2>
  }

	return (
    <ul className='expensesList'>
      {props.items.map(expenses => (
        <ExpenseItem
          key={expenses.id}
          title={expenses.title}
          amount={expenses.amount}
          date={expenses.date}
        />
      ))}
    </ul>
)
}

export default ExpensesList