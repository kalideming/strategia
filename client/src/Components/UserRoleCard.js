import React from "react";
import { useHistory } from "react-router-dom";

function UserRoleCard({ roles }) {

    const history = useHistory();
    const id = roles.project_id

    function handleToProjectPage() {
        history.push(`/projects/${id}`)
    };

    return (
        <div className="my-role-card-item">
            <div className="my-role-card">
                <img onClick={handleToProjectPage} className="my-role-card-image" src={roles.project.photo}/>
                <div className="my-role-card-content" onClick={handleToProjectPage}>    
                    <h2 className="my-role-card-title">{roles.role_title}</h2>
                    <h3 className="my-role-card-subtitle">{roles.project.title}</h3>
                    <h3 className="my-role-card-hours">{roles.required_hours} Required Hours</h3>
                    <p className="my-role-card-text">{roles.description}</p>
                </div>
            </div>
        </div>
    );
};

export default UserRoleCard;