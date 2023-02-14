import React, { useState, useContext } from "react";
import { UserContext } from "../Context/UserProvider";
import UpdateAccountForm from "../Components/UpdateAccountForm";

function AccountPage() {

    let { user } = useContext(UserContext);
    
    const [ isPopUpOpen, setIsPopUpOpen ] = useState(false);

    return (
        <div>
            <div>
                <img src={user.photo}/>
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
        </div>
    );
};

export default AccountPage;