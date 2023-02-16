import React, { useState } from "react";
import UpdateAccountForm from "../Components/UpdateAccountForm";
import { useHistory } from 'react-router-dom';

function AccountPage({ user, setUser }) {

    console.log(user)
    let history = useHistory();
    const [ isPopUpOpen, setIsPopUpOpen ] = useState(false);

    function deleteAccount() {
        fetch("/myaccount", {
            method: "DELETE"
        });
        setUser(null);
        history.push("/signup");
    };

    const firstName = user[0].first_name;
    const lastName = user[0].last_name;
    const position = user[0].position;
    const company = user[0].company.name;
    const photo = user[0].photo;
    const email = user[0].email;
    const username = user[0].username;
    const password = user[0].password;
    const availableHours = user[0].available_hours

   
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
            <button className="account-button"
                type="button"
                    onClick={() => setIsPopUpOpen(true)}
                >
                Edit Account 
            </button>
            <div>
                {isPopUpOpen ? (
                    <UpdateAccountForm onClose={() => setIsPopUpOpen(false)}/>
                ) : (
                    (null)
                )}
            </div>
            <button className="account-button" onClick={deleteAccount}>Delete Account</button>
        </div>
        </div>
    );
};

export default AccountPage;