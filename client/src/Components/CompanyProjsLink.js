import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { ManagerContext } from "../Context/ManagerProvider";
import { UpperManagContext } from "../Context/UpperManagProvider";
import { UserContext } from "../Context/UserProvider";

function CompanyProjsLink() {

    const { isUpperManag } = useContext(UpperManagContext);
    const { isManager } = useContext(ManagerContext);
    const [ canSeeAllProjs, setCanSeeAllProjs ] = useState(false);


    if (isUpperManag || isManager) {
        setCanSeeAllProjs(true)
    };
    
    return (
        <div>
        {canSeeAllProjs ? (
            <NavLink exact to="/companyprojects">Company Projects</NavLink>
        ) : (
            (null)
        )}
        </div>
    );    
};

export default CompanyProjsLink;