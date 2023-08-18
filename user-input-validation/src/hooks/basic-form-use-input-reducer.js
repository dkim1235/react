import { useState } from 'react';

const useInput = (validateValue) => {
  const [enteredValue, setEnteredValue] = useState('');
  const [enteredValueIsTouched, setEnteredValueIsTouched] = useState(false);

  const enteredValueIsValid = validateValue(enteredValue);
  const enteredValueHasError = !enteredValueIsValid && enteredValueIsTouched;

  const enteredValueChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };
  const enteredValueIsTouchedHandler = (event) => {
    setEnteredValueIsTouched(true);
  };

  const valueInputClasses = enteredValueHasError
    ? 'form-control invalid'
    : 'form-control';

	const resetValues = () => {
		setEnteredValue('');
		setEnteredValueIsTouched(false);
	}

  return {
    enteredValue,
		enteredValueIsValid,
		enteredValueHasError,
    enteredValueChangeHandler,
    enteredValueIsTouchedHandler,
		valueInputClasses,
		resetValues
  };
};

export default useInput;
