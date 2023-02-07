import React, { useContext, useState } from "react";
import { UserContext } from "../context/UserProvider";
import { NavLink } from "react-router-dom";

function AddProjLink() {

    let { user } = useContext(UserContext);
    let [isManag, setIsManag] = useState(true)

    if (user.manager !== true || user.upper_management !== true) {
        setIsManag(false)
    };

    return (
        <div>
        {!isManag ? (
            <div></div>
        ) : (
            <NavLink exact to="/newproject">Create Project</NavLink>
        )}
        </div>
    );
};

export default AddProjLink;