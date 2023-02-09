import React, { useState, useEffect } from "react";
import UserRolesList from "../Components/UserRolesList";
import CreateProjectButton from "../Components/CreateProjectButton";

function MyProjects(){

    let [ projectRoles, setProjectRoles ] = useState([]);

    useEffect(() => {
        fetch("/myprojects")
        .then((r) => r.json())
        .then((projectRoles) => setProjectRoles(projectRoles))
    }, []);

    return (
        <div>
            <UserRolesList projectRoles={projectRoles} setProjectRoles={setProjectRoles}/>
            <CreateProjectButton/>
        </div>
    )

}

export default MyProjects;