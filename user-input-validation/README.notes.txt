1. label/input
2. submit button
3. validation
  - use useSTate hook to set entered value variable
    - this includes using html input onChnage handler and adding a value variable
  - validate entered value var
  - if the entered variable is not valid output string in html of error 
      - creating a entered value validated variable, using the variable to render paragraph that only renders when validated variable value is false which represents value is invalid, and css classes, order in which the validation of entered value variable is created therefore set.
  - Use useState hok to sense if input was touched this
    - this includes using html input onBlur handler
  - use the valid input variable and state of touched to validate whether or not the value entered has errors. if the input is valid, and the blur has been touched, the input has no errors. this should set the css class of the form input to be valid or invalid. this variable of has error can be the boolean output for error message for input
4. form validation
  - if all inputs are valid then form is valid to submit
    - enable submit button with form validity
  - create form submission handler for html element form onSubmit 
    - this sumission handler should prevent default, re-validate inputs to ensure there are vaues in the entered value variables from the inputs that are passed into the form, then reset the value state and touch state.

5. create hook that incorperates all above
6. extra credit - use useReducer to replace useState.

