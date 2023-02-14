import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { UserContext } from "../Context/UserProvider";
import MemberList from "../Components/MemberList";
import TaskList from "../Components/TaskList";
import ProjectInfo from "../Components/ProjectInfo";
import UpdateProjectButton from "../Components/UpdateProjectButton";


function ProjectPage(){

    let { user } = useContext(UserContext);
    let { project, setProject } = useState({});
    const { id } = useParams();

    useEffect(() => {
        if (user) {
            fetch(`/projects/${id}`)
            .then((r) => r.json())    
            .then((project) => setProject(project))    
        }
    }, []);

    let projectMembers = project.project_roles
    let projectTasks = project.tasks 

    return (
        <div>
            <ProjectInfo project={project}/>
            <MemberList projectMembers={projectMembers} project={project}/>
            <TaskList tasks={projectTasks}/>
            <UpdateProjectButton project={project}/>
        </div>
    );

};

export default ProjectPage;