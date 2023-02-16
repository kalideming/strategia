import React, { useState, useEffect } from "react";
import MemberList from "../Components/MemberList";
import TaskList from "../Components/TaskList";
import ProjectInfo from "../Components/ProjectInfo";
import UpdateProjectButton from "../Components/UpdateProjectButton";
import { useParams } from "react-router-dom";

function ProjectPage({ user }){

    const [ project, setProject ] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        fetch(`/projects/${id}`)
        .then((r) => r.json())    
        .then((project) => setProject(project))    
    }, []);

    return (
        <div className="project-page">
            <ProjectInfo className="project-info" project={project} user={user}/>
            <MemberList className="member-list-container" project={project} user={user}/>
            {/* <TaskList tasks={projectTasks}/>
            <UpdateProjectButton project={project} user={user}/> */}
        </div>
    );

};

export default ProjectPage;