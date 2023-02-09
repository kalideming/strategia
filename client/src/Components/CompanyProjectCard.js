import React from "react";
import { useHistory } from "react-router-dom";

function CompanyProjectCard({ proj }) {

    const history = useHistory();

    function handleToProjectPage() {
        history.push(`/projects/${proj.id}`)
    };

    return (
        <li onClick={handleToProjectPage}>
            <img src={proj.photo}/>
            <h1>{proj.title}</h1>
            <h2>{proj.deadline}</h2>
            <p>{proj.description}</p>
        </li>
    );

}

export default CompanyProjectCard;