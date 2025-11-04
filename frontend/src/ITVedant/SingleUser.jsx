import React from "react";

const SingleUser = ({ user, onDelete }) => {
    return (
        <tr>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.phone}</td>
            <td>{user.address}</td>
            <td><button onClick={ () => onDelete(user.id)}>Delete</button></td>
        </tr>
    );
};

export default SingleUser;
