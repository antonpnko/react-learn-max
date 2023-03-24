import React, {useState} from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
  const [formVisibility, setFormVisibility] = useState(false);
  const formVisibilityHandler = () => {
    setFormVisibility(!formVisibility);
  };
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData);
  };

  return (
    <div className='new-expense'>
      {formVisibility === true && <ExpenseForm onFormVisibilityHandler={formVisibilityHandler} onSaveExpenseData={saveExpenseDataHandler} />}
      {formVisibility === false && <button onClick={formVisibilityHandler}>Add new expense</button>}
    </div>
  );
};

export default NewExpense;
