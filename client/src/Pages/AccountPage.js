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
            <div>
                <img src={photo} alt=""/>
                <h1>{firstName} {lastName}</h1>
                <h2>{position}</h2>
                <h3>{company}</h3>
                <ul>
                    <li>{email}</li>
                    <li>{password}</li>
                    <li>{username}</li>
                    <li>{availableHours}</li>
                </ul>
            </div>
            <button
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
            <button onClick={deleteAccount}>Delete Account</button>
        </div>
    );
};

export default AccountPage;