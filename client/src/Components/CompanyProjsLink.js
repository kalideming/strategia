import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { ManagerContext } from "../Context/ManagerProvider";
import { UpperManagContext } from "../Context/UpperManagProvider";
import { UserContext } from "../Context/UserProvider";

function CompanyProjsLink() {

    const { user } = useContext(UserContext);
    const { isUpperManag } = useContext(UpperManagContext);
    const { isManager } = useContext(ManagerContext);
    const [ canSeeAllProjs, setCanSeeAllProjs ] = useState(false);

    let companyID = user.company_id


    if (isUpperManag || isManager) {
        setCanSeeAllProjs(true)
    };
    
    return (
        <div>
        {canSeeAllProjs ? (
            <NavLink to={'/companies/'+companyID+'/projects'}>Company Projects</NavLink>
        ) : (
            (null)
        )}
        </div>
    );    
};

export default CompanyProjsLink;