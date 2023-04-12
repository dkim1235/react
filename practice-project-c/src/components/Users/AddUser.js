import React from 'react';
import Input from '../UI/AddUser.sc';

const AddUser = props => {
    const addUserHandler = (event) => {
        event.preventDefault();
        console.log(event.target.value);
    };

    return (
        <Input>
            <form onSubmit={addUserHandler}>
                <label htmlFor="username">UserName</label>
                <input type="text" id="username"></input>
                <label htmlFor="age">Age (Years)</label>
                <input type="number" id="age"></input>
                <button type="submit">Add User</button>
            </form>
        </Input>
    )
};

export default AddUser;