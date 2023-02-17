import React from "react";

function ProjectInfo({ project, user }) {

    const title = project.title;
    const description = project.description;
    const picture = project.photo;
    const deadline = project.deadline;

    console.log(project)

    return (
        <div className="project-info-container">
            <h1 className="welcome-back">{title}</h1>
            <img className="project-info-img" src={picture}/>
            <h3 className="project-info-deadline">Deadline: {deadline}</h3>
            <h4 className="project-info-description-header">Description:</h4>
            <p className="project-info-description">{description}</p>
        </div>
    );
};

export default ProjectInfo;