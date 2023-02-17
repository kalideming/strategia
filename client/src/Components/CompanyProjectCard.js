import React from "react";
import { useHistory } from "react-router-dom";

function CompanyProjectCard({ proj }) {

    const history = useHistory();
    const id = proj.id

    function handleToProjectPage() {
        history.push(`/projects/${id}`)
    };


    return (
        <div className="my-role-card-item">
            <div className="my-role-card">
                <img onClick={handleToProjectPage} src={proj.photo} className="my-role-card-image" alt=""/>
                <div className="my-role-card-content" onClick={handleToProjectPage}>
                    <h2 className="my-role-card-title">{proj.title}</h2>
                    <h3 className="my-role-card-subtitle">{proj.deadline}</h3>
                    <p className="my-role-card-text">{proj.description}</p>
                </div> 
            </div>
        </div>
        
    );

}

export default CompanyProjectCard;