import React from "react";
import { useHistory } from "react-router-dom";

function CompanyProjectCard({ proj }) {

    const history = useHistory();
    const id = proj.id

    function handleToProjectPage() {
        history.push(`/projects/${id}`)
    };

    return (
        <li onClick={handleToProjectPage}>
            <img src={proj.photo} alt=""/>
            <h1>{proj.title}</h1>
            <h2>{proj.deadline}</h2>
            <p>{proj.description}</p>
        </li>
    );

}

export default CompanyProjectCard;