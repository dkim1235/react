import { useState } from 'react';

const BasicForm = (props) => {
  const [enteredName, setEnteredName] = useState('');
	const [enteredNameIsTouched, setEnteredNameIsTouched] = useState(false);

	const enteredNameIsValid = enteredName.trim() !== '';
	const enteredNameHasError = !enteredNameIsValid && enteredNameIsTouched;

  const enteredNameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };
	const enteredNameIsTouchedHandler = (event) => {
		setEnteredNameIsTouched(true);
	}

	const nameInputClasses = enteredNameHasError ? 'form-control invalid' : 'form-control';

  return (
    <form>
      <div className="control-group">
        <div className={nameInputClasses}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            onChange={enteredNameChangeHandler}
            value={enteredName}
						onBlur={enteredNameIsTouchedHandler}
          />
					{enteredNameHasError && (<p className="error-text">the entered name is Invalid</p>)}
        </div>
        <div className="form-control">
          <label htmlFor="name">Last Name</label>
          <input type="text" id="name" />
        </div>
      </div>
      <div className="form-control">
        <label htmlFor="name">E-Mail Address</label>
        <input type="text" id="name" />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
