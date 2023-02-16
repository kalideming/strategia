import React, { useState, useEffect, useContext } from "react";
import UserRolesList from "../Components/UserRolesList";

function MyProjectsPage({ user }){

    const currentUser = user[0]
    const [ projectRoles, setProjectRoles ] = useState([]);

    useEffect(() => {
        fetch(`/users/${currentUser.id}/project_roles`)
        .then((r) => r.json())
        .then((projectRoles) => setProjectRoles(projectRoles))
    }, []);

    console.log(projectRoles)

    return (
        <div>
            <UserRolesList projectRoles={projectRoles}/>
        </div>
    );
};

export default MyProjectsPage;