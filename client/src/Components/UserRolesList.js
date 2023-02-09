import React from "react";
import UserRoleCard from "./UserRoleCard";

function UserRolesList({ projectRoles, setProjectRoles }) {

    const mappedRoles = projectRoles.map(oneRole => {
        return <UserRoleCard key={oneRole.id} roles={oneRole}/>
    });

    return (
        <ul>
            {mappedRoles}
        </ul>
    );
};

export default UserRolesList;