import useInput from '../hooks/basic-form-use-input';
import {useState} from 'react';

const BasicForm = (props) => {
  const {
    enteredValue: enteredFirstName,
		enteredValueIsValid: enteredFirstNameIsValid,
		enteredValueHasError: enteredFirstNameHasError,
    enteredValueChangeHandler: enteredFirstNameChangeHandler,
		enteredValueIsTouchedHandler: enteredFirstNameIsTouchedHandler,
		valueInputClasses: firstNameInputClasses,
		resetValues: resetFirstName
  } = useInput((value) => value.trim() !== '');

  const {
    enteredValue: enteredLastName,
		enteredValueIsValid: enteredLastNameIsValid,
		enteredValueHasError: enteredLastNameHasError,
    enteredValueChangeHandler: enteredLastNameChangeHandler,
		enteredValueIsTouchedHandler: enteredLastNameIsTouchedHandler,
		valueInputClasses: lastNameInputClasses,
		resetValues: resetLastName
  } = useInput((value) => value.trim() !== '');

  const {
    enteredValue: enteredEmail,
		enteredValueIsValid: enteredEmailIsValid,
		enteredValueHasError: enteredEmailHasError,
    enteredValueChangeHandler: enteredEmailChangeHandler,
		enteredValueIsTouchedHandler: enteredEmailIsTouchedHandler,
		valueInputClasses: emailInputClasses,
		resetValues: resetEmail
  } = useInput((value) => value.includes('@'));

  let formIsValid = false;

  if (
    enteredFirstNameIsValid == true &&
    enteredLastNameIsValid == true &&
    enteredEmailIsValid == true
  ) {
    formIsValid = true;
  }
  const formSubmissionHandler = (event) => {
    event.preventDefault();
    if (
      enteredFirstName.trim() == '' &&
      enteredLastName.trim() == '' &&
      enteredEmail.trim() == ''
    ) {
      return;
    }
		resetFirstName();
		resetLastName();
		resetEmail();
  };

  return (
    <form onSubmit={formSubmissionHandler}>
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
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
