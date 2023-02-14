import React, { useState, useContext } from "react";
import { UserContext } from "../Context/UserProvider";

function UpdateAccountForm({ onClose }) {

    let { user, setUser } = useContext(UserContext);

    const [ account, setAccount ] = useState({
        first_name: user.first_name,
        last_name: user.last_name,        
        position: user.position,
        available_hours: user.available_hours,
        photo: user.photo,
        email: user.email, 
        username: user.username,
        password: user.password,
        company: user.company,
        manager: user.manager, 
        upper_management: user.upper_management
    });

    function handleEditAccount(e) {

        e.preventDefault();

        fetch(`/users/${user.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(account)
        })
        .then(() => {setUser(account)});

        onClose();
    };

    function handleChange(e) {
        setAccount((prev) => {
            return {
                ...prev,
                [e.target.name]: e.target.value 
            };
        });
    };

    return (
        <div>
            <h1>Edit Account Information:</h1>
            <form onSubmit={handleEditAccount}>
                <div>
                    <label>First Name:</label>
                    <input
                        type="text"
                        name="first_name"
                        value={account.first_name}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Last Name:</label>
                    <input
                        type="text"
                        name="last_name"
                        value={account.last_name}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Position:</label>
                    <input
                        type="text"
                        name="position"
                        value={account.position}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Available Hours:</label>
                    <input
                        type="text"
                        name="available_hours"
                        value={account.available_hours}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Avatar:</label>
                    <input
                        type="text"
                        name="photo"
                        value={account.photo}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Email:</label>
                    <input
                        type="text"
                        name="email"
                        value={account.email}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Username:</label>
                    <input
                        type="text"
                        name="username"
                        value={account.username}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="new-password"
                        name="password"
                        value={account.password}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <button onClick={onClose}>Cancel</button>
                    <button type="submit">Save Account</button>
                </div>
            </form>
        </div>
    );
};

export default UpdateAccountForm;