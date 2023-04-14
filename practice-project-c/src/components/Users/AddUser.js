import React from 'react';
import Input from '../UI/AddUser.sc';
import Button from '../UI/Button.sc';

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
                <Button type="submit">Add User</Button>
            </form>
        </Input>
    )
};

export default AddUser;