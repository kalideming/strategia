import React from "react";

function ProjectInfo({ project }) {

    let title = project.title;
    let company = project.company.name;
    let description = project.description;
    let picture = project.photo;
    let deadline = project.deadline;

    return (
        <div>
            <img src={picture}/>
            <h1>{title}</h1>
            <h2>{company}</h2>
            <h3>Deadline: {deadline}</h3>
            <p>{description}</p>
        </div>
    );
};

export default ProjectInfo;