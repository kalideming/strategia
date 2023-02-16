import React, { useState } from "react";
import { useHistory } from 'react-router-dom';

function AccountPage({ user, setUser }) {

    let history = useHistory();
    // const [ isPopUpOpen, setIsPopUpOpen ] = useState(false);
    const [ showAccountUpdate, setShowAccountUpdate ] =useState(false);

    function switchAccountUpdate() {
        setShowAccountUpdate(!showAccountUpdate)
    };

    const firstName = user[0].first_name;
    const lastName = user[0].last_name;
    const position = user[0].position;
    const company = user[0].company.name;
    const photo = user[0].photo;
    const email = user[0].email;
    const username = user[0].username;
    const password = user[0].password;
    const availableHours = user[0].available_hours;

    const newForm = {
        email: "",
        password: "",
        username: "",
        available_hours: ""
    };

    const [ formData, setFormData ] = useState({
        email: user[0].email,
        password: user[0].password,
        username: user[0].username,
        availableHours: user[0].available_hours
    });

    const handleChange = (e) => {
        const { name, value } = e.target 
        setFormData({...formData, [name]: value })
    };

    function submitUpdate(e) {
        e.preventDefault();

        const updateAccount = {
            email: formData.email,
            password: formData.password,
            username: formData.username,
            available_hours: formData.availableHours
        };

        fetch("/myaccount", {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updateAccount),
        })
        .then((r) => r.json())
        .then((updatedAccount) => {
            setUser(updatedAccount)
            setFormData({
                email: updatedAccount.email,
                password: "",
                username: updatedAccount.username,
                availableHours: updatedAccount.available_hours
            })
        });

        setShowAccountUpdate(false);
    };

    function deleteAccount() {
        fetch("/myaccount", {
            method: "DELETE"
        });
        setUser(null);
        history.push("/signup");
    };

   
    return (
        <div>
            <div className="container">
                <div className="avatar">
                    <img src={photo} alt=""/>
                </div>
            </div> 
            <div className="box">
                <h1 className="welcome-back">{firstName} {lastName}</h1>
                <h2 className="company-position">{position}</h2>
                <h3 className="company-position">{company}</h3>
                <div className="account-info-grid">
                    <div className="account-grid-item">
                        <p className="account-grid-content">Email:</p>
                        <p className="account-grid-content">{email}</p>
                    </div>
                    <div className="account-grid-item">
                        <p className="account-grid-header">Password:</p>
                        <p className="account-grid-content">{password}</p>
                    </div>
                    <div className="account-grid-item">
                        <p className="account-grid-header">Username:</p>
                        <p className="account-grid-content">{username}</p>
                    </div>
                    <div className="account-grid-item">
                        <p className="account-grid-header">Available Hours:</p>
                        <p className="account-grid-content">{availableHours}</p>
                    </div>
                </div>
            </div>
            <div className="account-button-container">
                {(!showAccountUpdate) ? (
                    <button className="account-button" onClick={switchAccountUpdate}>
                        Update Account
                    </button>) : (
                    <div>
                        <h3>Update Account Information</h3>
                        <form onSubmit={submitUpdate}>
                            <div>
                                <label>Update Email:</label>
                                <input
                                    type="text"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                            </div>
                            <div>
                                <label>Update Password:</label>
                                <input
                                    type="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                />
                            </div>
                            <div>
                                <label>Update Username:</label>
                                <input
                                    type="text"
                                    name="username"
                                    value={formData.username}
                                    onChange={handleChange}
                                />
                            </div>
                            <div>
                                <label>Update Availability:</label>
                                <input
                                    type="text"
                                    name="availableHours"
                                    value={formData.availableHours}
                                    onChange={handleChange}
                                />
                            </div>
                            <div>
                                <button type="submit">Submit Update</button>
                            </div>
                        </form>
                        <button onClick={switchAccountUpdate}>Hide Account Update</button>
                    </div>
                )}
                <button className="account-button" onClick={deleteAccount}>Delete Account</button>
            </div>
        </div>
    );
};

export default AccountPage;