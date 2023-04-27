import React, { useState, Fragment, useRef } from 'react';

import classes from './AddUser.module.css';

import Card from '../Card/index';
import Button from '../Button/index';
import ErrorModal from '../ErrorModal/index';
import Wrapper from '../Helper/Wrapper/index';

const AddUser = (props) => {
    const nameInputRef = useRef();
    const ageInputRef = useRef();
    // const [enteredUsername, setEnteredUsername] = useState('');
    // const [enteredAge, setEnteredAge] = useState('');
    const [error, setError] = useState();

    const addUserHandler = (event) => {
        event.preventDefault();
        const enteredUsernameRef = nameInputRef.current.value;
        const enteredAgeRef = ageInputRef.current.value;
        if (enteredUsernameRef.trim().length === 0 || enteredAgeRef.trim().length === 0) {
            setError({
                title: 'Invalid input',
                message: 'Please enter a valid name and age (non-empty values).'
            });
            return;
        }
        if (+enteredAgeRef < 1) {
            setError({
                title: 'Invalid age',
                message: 'Please enter a valid age (>0).'
            });
            return;
        }
        props.onAddUser(enteredUsernameRef, enteredAgeRef);
        nameInputRef.current.value = '';
        ageInputRef.current.value = '';
        // setEnteredAge('');
        // setEnteredUsername('');
    }
    // const usernameChangeHandler = (event) => {
    //     setEnteredUsername(event.target.value);
    // }
    // const ageChangeHandler = (event) => {
    //     setEnteredAge(event.target.value);
    // }
    const errorHandler = () => {
        setError(null);
    }

    return (
        <Wrapper>
            {error && (
                <ErrorModal
                    title={error.title}
                    message={error.message}
                    onConfirm={errorHandler}
                />
            )}
            <Card className={classes.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username">UserName</label>
                    <input
                        id="username"
                        type="text"
                        ref={nameInputRef}
                        // value={enteredUsername}
                        // onChange={usernameChangeHandler}
                    />
                    <label htmlFor="age">Age (Years)</label>
                    <input
                        id="age"
                        type="number"
                        ref={ageInputRef}
                        // value={enteredAge}
                        // onChange={ageChangeHandler}
                    />
                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </Wrapper>
    );
};


export default AddUser;