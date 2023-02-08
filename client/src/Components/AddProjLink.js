import React, { useContext, useState } from "react";
import { UserContext } from "../Context/UserProvider";
import { NavLink } from "react-router-dom";

function AddProjLink() {

    let { user } = useContext(UserContext);
    let [isManag, setIsManag] = useState(user.manager !== true || user.upper_management !== true ? false : true)

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