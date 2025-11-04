import React, { useState } from "react";
import SingleUser from "./SingleUser";
import userData from "./users";
import './userManagement.css'

const AllUsers = () => {
    const [users, setUsers] = useState([]);
    const [isAdded, setIsAdded] = useState(false);

    const handleAddAll = () => {
        setUsers(userData);
        setIsAdded(true)
    };

    const handleDeleteAll = () => {
        setUsers([]);
        setIsAdded(false);
    };

    const handleDeleteUser = (id) => {
        const updatedUsers = users.filter((user) => user.id !== id);
        setUsers(updatedUsers);

        if (updatedUsers.length === 0) {
            setIsAdded(false);
        }
    };

    return (
        <div className="out">
            <div className="in">
                <h2>User  Management</h2>
                {!isAdded ? (
                    <button onClick={handleAddAll}>Add All Users</button>
                ) : (
                    <button onClick={handleDeleteAll}>Delete All Users</button>
                )}

                {users.length > 0 && (
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Address</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user) => (
                                <SingleUser key={user.id} user={user} onDelete={handleDeleteUser} />
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
        </div>
    )
};

export default AllUsers;

