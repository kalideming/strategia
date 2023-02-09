import React, { useState, useEffect, useContext } from "react";
import { useHistory, useParams } from "react-router-dom";
import { UserContext } from "../Context/UserProvider";
import MemberList from "../Components/MemberList";
import TaskList from "../Components/TaskList";
import ProjectInfo from "../Components/ProjectInfo";

function ProjectPage(){

    let { user } = useContext(UserContext);
    let history = useHistory();
    let [ project, setProject ] = useState([]);
    let [ isManag, setIsManag ] = useState([]);
    let [ isUpperManag, setIsUpperManag ] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        fetch(`/projects/${id}`)
        .then((r) => r.json())
        .then((project) => setProject(project))
    }, []);

    let members = project.project_roles
    let tasks = project.tasks 

    function handleToUpdate() {
        history.push("/updateproject")
    };

    // Figuring out how to conditionally render update button
    // button should persist across all company projects for upper management 
    // button should only render for managers on projects of which they are a member 

    if (user.manager === false) {
        setIsManag(false);
    };

    if (user.upper_management === false) {
        setIsUpperManag(false);
    };

    return (
        <div>
            <ProjectInfo project={project}/>
            <MemberList members={members}/>
            <TaskList tasks={tasks}/>

            <button onClick={handleToUpdate}></button>
        </div>
    );

}

export default ProjectPage;