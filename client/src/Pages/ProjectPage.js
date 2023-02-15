import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "../Context/UserProvider";
import MemberList from "../Components/MemberList";
import TaskList from "../Components/TaskList";
import ProjectInfo from "../Components/ProjectInfo";
import UpdateProjectButton from "../Components/UpdateProjectButton";
import { useParams } from "react-router-dom";

function ProjectPage(){

    let { user } = useContext(UserContext);
    const [ project, setProject ] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        fetch(`projects/${id}`)
        .then((r) => r.json())    
        .then((project) => setProject(project))    
    }, []);

    if(!user || !project){
        return <div>Loading</div>
    };

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