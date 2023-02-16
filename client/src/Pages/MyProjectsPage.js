import React, { useState, useEffect, useContext } from "react";
import UserRolesList from "../Components/UserRolesList";

function MyProjectsPage({ user }){

    const currentUser = user[0]
    const [ projectRoles, setProjectRoles ] = useState([]);

    useEffect(() => {
        fetch("/myprojects")
        .then((r) => r.json())
        .then((projectRoles) => setProjectRoles(projectRoles))
    }, []);

    return (
        <div>
            <UserRolesList projectRoles={projectRoles}/>
        </div>
    );
};

export default MyProjectsPage;