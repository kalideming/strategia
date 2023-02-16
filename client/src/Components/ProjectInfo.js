import React from "react";

function ProjectInfo({ project, user }) {

    const title = project.title;
    const description = project.description;
    const picture = project.photo;
    const deadline = project.deadline;

    console.log(project)

    return (
        <div className="container">
            <img className="project-info-img" src={picture}/>
            <h1 className="project-info-title">{title}</h1>
            <h3 className="project-info-deadline">Deadline: {deadline}</h3>
            <p className="project-info-description">{description}</p>
        </div>
    );
};

export default ProjectInfo;