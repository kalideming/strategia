import React, { useState, useContext } from "react";
import { UserContext } from "../Context/UserProvider";
import UpdateAccountForm from "../Components/UpdateAccountForm";
import { useHistory } from 'react-router-dom';

function AccountPage() {

    let { user, setUser } = useContext(UserContext);
    let history = useHistory();
    const [ isPopUpOpen, setIsPopUpOpen ] = useState(false);

    function deleteAccount() {
        fetch("/home", {
            method: "DELETE"
        });
        setUser(null);
        history.push("/");
    };

    if (!user) {
        return <h2>Loading...</h2>
    };

    return (
        <div>
            <div>
                <img src={user.photo} alt=""/>
                <h1>{user.first_name} {user.last_name}</h1>
                <h2>{user.position}</h2>
                <h3>{user.company.name}</h3>
                <ul>
                    <li>{user.email}</li>
                    <li>{user.username}</li>
                    <li>{user.available_hours}</li>
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