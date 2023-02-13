import React, { useState, useEffect, useContext } from "react";
import NewProjectButton from "../Components/NewProjectButton";
import UserRolesList from "../Components/UserRolesList";
import { UserContext } from "../Context/UserProvider";

function MyProjects(){

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
            <NewProjectButton/>
        </div>
    );
};

export default MyProjects;