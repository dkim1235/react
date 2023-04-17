import React from 'react';
import UsersListStyled from '../UI/UsersList.sc';

const UsersList = (props) => {
    return (
        <UsersListStyled>
            <ul>
                {props.users.map((user) => (
                    <li key="user.id">
                        {user.name} ({user.age} years old)
                    </li>
                ))}
            </ul>
        </UsersListStyled>
    );
};

export default UsersList;