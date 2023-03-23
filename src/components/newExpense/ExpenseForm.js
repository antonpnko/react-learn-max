import './ExpenseForm.css'
import {useState} from "react";

const ExpenseForm = () => {

	const [userInput, setUserInput] = useState({
		title: '',
		amount: '',
		date: '',
	})

	const changeHandler = (e) => {

		const fieldUpdate = {}
		fieldUpdate[e.target.name] = e.target.value
		setUserInput((prevState) => {
			return { ...prevState, ...fieldUpdate}
		})

	}

	const submitHndler = (e) => {
		e.preventDefault()
		setUserInput(()=>{
			return {
				title: '',
				amount: '',
				date: '',
			}
		})
	}


	return (
		<form action="" onSubmit={submitHndler}>
			<div className="new-expense__controls">

				<div className="new-expense__control">
					<label htmlFor="">Title</label>
					<input name='title' value={userInput.title}  type="text" onChange={changeHandler}/>
				</div>

				<div className="new-expense__control">
					<label htmlFor="">Amount</label>
					<input name='amount' value={userInput.amount}  type="number" min='0.01' step='0.01'  onChange={changeHandler}/>
				</div>

				<div className="new-expense__control">
					<label htmlFor="">Date</label>
					<input name='date' value={userInput.date}  type="date" min='2019-01-01' max='2024-01-01'  onChange={changeHandler}/>
				</div>

				<div className="new-expense__actions">
					<button type='submit'>Add Expense</button>
				</div>
			</div>
		</form>
	)
}

export default ExpenseForm