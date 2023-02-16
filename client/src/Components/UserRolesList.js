import React from "react";
import UserRoleCard from "./UserRoleCard";

function UserRolesList({ projectRoles }) {

    const mappedRoles = projectRoles.map(oneRole => {
        return <UserRoleCard key={oneRole.id} roles={oneRole}/>
    });

    return (
        <div className="my-role-cards">
            {mappedRoles}
        </div>
    );
};

export default UserRolesList;