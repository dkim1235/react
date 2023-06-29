import { useEffect, useRef, useState } from 'react';

const SimpleInput = (props) => {
  const nameInputRef = useRef();
  const [enteredName, setEnteredName] = useState('');
  const [enteredNameIsValid, setEnteredNameIsValid] = useState(false);
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  useEffect(() => {
    if (enteredNameIsValid) {
      console.log('Name Input is Valid!');
    }
  }, [enteredNameIsValid]);

	const nameInputBlurHandler = (event) => {
		setEnteredNameTouched(true)
		if (enteredName.trim() == '') {
      setEnteredNameIsValid(false);
    }
	}

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
		if (enteredName.trim() !== '') {
      setEnteredNameIsValid(true);
    }
  };
  const formSubmissionHandler = (event) => {
    event.preventDefault();
    setEnteredNameTouched(true);
    if (enteredName.trim() == '') {
      setEnteredNameIsValid(false);
      return false;
    }
    setEnteredNameIsValid(true);
    console.log(enteredName);
    const enteredValue = nameInputRef.current.value;
    console.log(enteredValue);
    // nameInputRef.current.value = '';
  };

  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

  const nameInputClasses = nameInputIsInvalid
    ? 'form-control invalid'
    : 'form-control';
  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameInputChangeHandler}
          ref={nameInputRef}
          value={enteredName}
					onBlur={nameInputBlurHandler}
        />
      </div>
      {nameInputIsInvalid && (
        <p className="error-text">Name mst not be empty</p>
      )}
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
