import React, { useState, useEffect, useContext } from "react";
import { useHistory, useParams } from "react-router-dom";
import { UserContext } from "../Context/UserProvider";
import { ManagerContext } from "../Context/ManagerProvider";
import { UpperManagContext } from "../Context/UpperManagProvider";
import MemberList from "../Components/MemberList";
import TaskList from "../Components/TaskList";
import ProjectInfo from "../Components/ProjectInfo";
import UpdateProjectButton from "../Components/UpdateProjectButton";


function ProjectPage(){

    let { user } = useContext(UserContext);
    let { isUpperManag } = useContext(UpperManagContext);
    let { isManager } = useContext(ManagerContext);
    let { project, setProject } = useState({});
    let history = useHistory();
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
            <MemberList members={projectMembers}/>
            <TaskList tasks={projectTasks}/>
            <UpdateProjectButton project={project}/>
        </div>
    );

};

export default ProjectPage;