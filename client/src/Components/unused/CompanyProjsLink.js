import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function CompanyProjsLink({ user }) {

    const [ isManager, setIsManager ] = useState(false);
    const [ isUpperManagement, setIsUpperManagement ] = useState(false);
    const [ canSeeAllProjs, setCanSeeAllProjs ] = useState

    if (user[0].manager === true) {
        setIsManager(true)
    };

    if (user[0].upper_management === true) {
        setIsUpperManagement(true)
    };

    if (isManager && isUpperManagement) {
        setCanSeeAllProjs(true)
    };

    return (
        <div>
        {canSeeAllProjs ? (
            <NavLink to="/companyprojects">Company Projects</NavLink>
        ) : (
            (null)
        )}
        </div>
    );    
};

export default CompanyProjsLink;