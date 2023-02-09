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
    let [ isProjHead, setIsProjHead ] = useState(true);
    let [ isUpperManag, setIsUpperManag ] = useState(true);
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

    function handleToDelete() {
        history.push("/deleteproject")
    };

    if (project.project_role.project_head !== user.project_role.project_head) {
        setIsProjHead(false);
    };

    if (user.upper_management === false) {
        setIsUpperManag(false);
    };

    return (
        <div>
            <ProjectInfo project={project}/>
            <MemberList members={members}/>
            <TaskList tasks={tasks}/>
            <div>
                { !isProjHead ? (
                    (null)
                ) : (
                    <button onClick={handleToUpdate}>Update Project</button>
                )}
            </div>
            <div>
                { !isUpperManag ? (
                    (null)
                ) : (
                    <div>
                        <button onClick={handleToUpdate}>Update Project</button>
                        <button onClick={handleToDelete}>Delete Project</button>
                    </div>
                )}
            </div>
        </div>
    );

};

export default ProjectPage;