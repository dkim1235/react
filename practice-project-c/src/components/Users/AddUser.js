import React, { useState } from 'react';
import Input from '../UI/AddUser.sc';
import Button from '../UI/Button.sc';

const AddUser = props => {
    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge] = useState('');

    const addUserHandler = (event) => {
        event.preventDefault();
        if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
            return;
        }
        if (+enteredAge < 1) {
            return;
        }
        props.onAddUser(enteredUsername, enteredAge);
        setEnteredUsername('');
        setEnteredAge('');
    };

    const usernameChangeHandler = (event) => {
        setEnteredUsername(event.target.value);
    };
    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value);
    };

    return (
        <Input>
            <form onSubmit={addUserHandler}>
                <label htmlFor="username">UserName</label>
                <input
                    type="text"
                    id="username"
                    value={enteredUsername}
                    onChange={usernameChangeHandler}
                />
                <label htmlFor="age">Age (Years)</label>
                <input
                    type="number"
                    id="age"
                    value={enteredAge}
                    onChange={ageChangeHandler}
                />
                <Button type="submit">Add User</Button>
            </form>
        </Input>
    )
};

export default AddUser;