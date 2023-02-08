import React, { useContext, useState } from "react";
import { UserContext } from "../Context/UserProvider";
import { NavLink } from "react-router-dom";

function ProjsLink() {

    let { user } = useContext(UserContext);
    let [isUpperManag, setIsUpperManag] = useState(true)

    if (user.upper_management === false) {
        setIsUpperManag(false)
    };
    
    return (
        <div>
        {!isUpperManag ? (
            <NavLink exact to="/myprojects">My Projects</NavLink>
        ) : (
            <NavLink exact to="/companyprojects">All {user.company} Projects</NavLink>
        )}
        </div>
    );    
};

export default ProjsLink;