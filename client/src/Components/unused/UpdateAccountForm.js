import React, { useState } from "react";

function UpdateAccountForm({ user, setUser, onClose }) {

    const firstName = user.first_name;
    const lastName = user.last_name;
    const position = user.position;
    const photo = user.photo;
    const email = user.email;
    const username = user.username;
    const password = user.password;
    const availableHours = user.available_hours

    const newForm = {
        firstName: "",
        lastName: "",
        position: "",
        photo: "",
        email: "",
        username: "",
        password: "",
        availableHours: ""
    };

    const [ formData, setFormData ] = useState({
        firstName: firstName,
        lastName: lastName,
        position: position,
        photo: photo,
        email: email,
        username: username,
        password: password,
        availableHours: availableHours
    });

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({...formData, [name]: value})
    };

    const submitUpdate = (e) => {
        e.preventDefault();

        const updateAccount = {
            firstName: formData.firstName,
            lastName: formData.lastName,
            position: formData.position,
            photo: formData.photo,
            email: formData.email,
            username: formData.username,
            password: formData.password,
            availableHours: formData.availableHours
        };

        fetch("/myaccount", {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updateAccount)
        })
        .then((r) => r.json())
        .then((updatedAccount) => {
            setUser(updatedAccount)
            setFormData({
                firstName: updatedAccount.firstName,
                lastName: updatedAccount.lastName,
                position: updatedAccount.position,
                photo: updatedAccount.photo,
                email: updatedAccount.email,
                username: updatedAccount.username,
                password: updatedAccount.password,
                availableHours: updatedAccount.availableHours
            })
        })
    };

    return (
        <div>
            <h1>Edit Account Information:</h1>
            <form onSubmit={submitUpdate}>
                <div>
                    <label>First Name:</label>
                    <input
                        type="text"
                        name="first_name"
                        value={formData.firstName}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Last Name:</label>
                    <input
                        type="text"
                        name="last_name"
                        value={formData.lastName}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Position:</label>
                    <input
                        type="text"
                        name="position"
                        value={formData.position}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Available Hours:</label>
                    <input
                        type="text"
                        name="available_hours"
                        value={formData.availableHours}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Avatar:</label>
                    <input
                        type="text"
                        name="photo"
                        value={formData.photo}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Email:</label>
                    <input
                        type="text"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Username:</label>
                    <input
                        type="text"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="new-password"
                        name="password"
                        value={formData.password}
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