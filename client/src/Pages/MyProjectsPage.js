import React, { useState, useEffect, useContext } from "react";
import UserRolesList from "../Components/UserRolesList";
import { UserContext } from "../Context/UserProvider";

function MyProjectsPage(){

    const { user } = useContext(UserContext);
    const [ projectRoles, setProjectRoles ] = useState([]);

    useEffect(() => {
        if (user) {
            fetch(`/users/${user.id}/project_roles`)
            .then((r) => r.json())
            .then((projectRoles) => setProjectRoles(projectRoles))
        } 
    }, []);

    return (
        <div>
            <UserRolesList projectRoles={projectRoles}/>
        </div>
    );
};

export default MyProjectsPage;