import React from "react";
import { useHistory } from "react-router-dom";

function UserRoleCard({ roles }) {

    const history = useHistory();

    function handleToProjectPage() {
        history.push(`/projects/${roles.project_id}`)
    };

    return (
        <li onClick={handleToProjectPage}>
            <h2>{roles.role_title}</h2>
            <h3>{roles.project.title}</h3>
            <h3>{roles.required_hours}</h3>
            <p>{roles.description}</p>
        </li>
    );
};

export default UserRoleCard;