import React from "react";
import { useHistory } from "react-router-dom";

function UserRoleCard({ roles }) {

    const history = useHistory();

    function handleOneRole() {
        history.push(`/projectpage/${roles.id}`)
    };

    return (
        <li onClick={handleOneRole}>
            <h2>{roles.role_title}</h2>
            <h3>{roles.project.title}</h3>
            <h3>{roles.required_hours}</h3>
            <p>{roles.description}</p>
        </li>
    );
};

export default UserRoleCard;