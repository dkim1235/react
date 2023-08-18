import { useReducer } from 'react';

const initialInputState = {
	value: '',
	isTouched: false
}

const inputStateReducer = (state, action) => {
	if(action.type == 'INPUT') {
		return {value: action.value, isTouched: state.isTouched}
	}
	if(action.type == 'BLUR') {
		return {isTouched: true, value: state.value}
	}
	if(action.type == 'RESET') {
		return {value: '', isTouched:false}
	}
	return inputStateReducer;
}

const useInput = (validateValue) => {
  const [inputState, dispatch] = useReducer(
    inputStateReducer,
    initialInputState
  );

  const enteredValueIsValid = validateValue(inputState.value);
  const enteredValueHasError = !enteredValueIsValid && inputState.isTouched;

  const enteredValueChangeHandler = (event) => {
		dispatch({type: 'INPUT', value: event.target.value});
  };
  const enteredValueIsTouchedHandler = (event) => {
		dispatch({type: 'BLUR'});
  };

  const valueInputClasses = enteredValueHasError
    ? 'form-control invalid'
    : 'form-control';

  const resetValues = () => {
		dispatch({type: 'RESET'})
  };

  return {
    enteredValue: inputState.value,
    enteredValueIsValid,
    enteredValueHasError,
    enteredValueChangeHandler,
    enteredValueIsTouchedHandler,
    valueInputClasses,
    resetValues,
  };
};

export default useInput;
