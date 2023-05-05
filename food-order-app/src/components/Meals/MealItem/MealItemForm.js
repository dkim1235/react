import React, { useRef, useState } from 'react';

import Input from '../../UI/Input';

import classes from './MealItemForm.module.css';

const MealItemForm = (props) => {
  const amountInputRef = useRef();
	const [amountIsValid, setAmountIsValid] = useState(true);

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    const numEnteredAmount = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      numEnteredAmount < 0 ||
      numEnteredAmount > 5
    ) {
			setAmountIsValid(false)
      return;
    }
		
		props.onAddToCart(numEnteredAmount);
  };
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: 'amount_' + props.id,
          defaultValue: '1',
          min: '1',
          max: '5',
          type: 'number',
          step: '1',
        }}
      />
      <button className={classes.button}>+ Add</button>
    {!amountIsValid && <p>Please Enter A Valid Amount (1-5).</p>}
		</form>
  );
};

export default MealItemForm;
