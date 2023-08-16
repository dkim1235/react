import { useState } from 'react';

const BasicForm = (props) => {
  const [enteredFirstName, setEnteredFirstName] = useState('');
  const [enteredFirstNameIsTouched, setEnteredFirstNameIsTouched] =
    useState(false);

  const enteredFirstNameIsValid = enteredFirstName.trim() !== '';
  const enteredFirstNameHasError =
    !enteredFirstNameIsValid && enteredFirstNameIsTouched;

  const [enteredLastName, setEnteredLastName] = useState('');
  const [enteredLastNameIsTouched, setEnteredLastNameIsTouched] =
    useState(false);

  const enteredLastNameIsValid = enteredLastName.trim() !== '';
  const enteredLastNameHasError =
    !enteredLastNameIsValid && enteredLastNameIsTouched;

  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredEmailIsTouched, setEnteredEmailIsTouched] = useState(false);

  const enteredEmailIsValid = enteredEmail.includes('@');
  const enteredEmailHasError = !enteredEmailIsValid && enteredEmailIsTouched;

  const enteredFirstNameChangeHandler = (event) => {
    setEnteredFirstName(event.target.value);
  };
  const enteredFirstNameIsTouchedHandler = (event) => {
    setEnteredFirstNameIsTouched(true);
  };

  const enteredLastNameChangeHandler = (event) => {
    setEnteredLastName(event.target.value);
  };
  const enteredLastNameIsTouchedHandler = (event) => {
    setEnteredLastNameIsTouched(true);
  };

  const enteredEmailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };
  const enteredEmailIsTouchedHandler = (event) => {
    setEnteredEmailIsTouched(true);
  };

  const firstNameInputClasses = enteredFirstNameHasError
    ? 'form-control invalid'
    : 'form-control';
  const lastNameInputClasses = enteredLastNameHasError
    ? 'form-control invalid'
    : 'form-control';
  const emailInputClasses = enteredEmailHasError
    ? 'form-control invalid'
    : 'form-control';

  return (
    <form>
      <div className="control-group">
        <div className={firstNameInputClasses}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            onChange={enteredFirstNameChangeHandler}
            value={enteredFirstName}
            onBlur={enteredFirstNameIsTouchedHandler}
          />
          {enteredFirstNameHasError && (
            <p className="error-text">the entered first name is Invalid</p>
          )}
        </div>
        <div className={lastNameInputClasses}>
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="name"
            onChange={enteredLastNameChangeHandler}
            value={enteredLastName}
            onBlur={enteredLastNameIsTouchedHandler}
          />
          {enteredLastNameHasError && (
            <p className="error-text">the entered last name is invalid</p>
          )}
        </div>
      </div>
      <div className="form-control">
        <div className={emailInputClasses}>
          <label htmlFor="name">E-Mail Address</label>
          <input
            type="text"
            id="name"
            onChange={enteredEmailChangeHandler}
            value={enteredEmail}
            onBlur={enteredEmailIsTouchedHandler}
          />
          {enteredEmailHasError && (
            <p className="error-text">the entered email is invalid</p>
          )}
        </div>
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
