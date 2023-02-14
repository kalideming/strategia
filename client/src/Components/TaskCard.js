import React, { useContext, useState, useEffect } from "react";
import UpdateTaskButton from "./UpdateTaskButton";
import { ManagerContext } from "../Context/ManagerProvider";
import { UpperManagContext } from "../Context/UpperManagProvider";
import { ProjectHeadContext } from "../Context/ProjectHeadProvider";
import { UserContext } from "../Context/UserProvider";
import TaskCompleteButton from "./TaskCompleteButton";

function TaskCard({ task }) {

    const { isManager } = useContext(ManagerContext);
    const { isUpperManag } = useContext(UpperManagContext);
    const { isProjectHead } = useContext(ProjectHeadContext);
    const [ allTasks, setAllTasks ] = useState([]);
    const { user } = useContext(UserContext);
    const [ canDelete, setCanDelete ] = useState(false);

    useEffect(() => {
        if(user) {
            fetch("/tasks")
            .then((r) => r.json())
            .then((allTasks) => setAllTasks(allTasks))
        };
    }, []);

    function handleDelete(e) {
        fetch(`/tasks/${task.id}`, {
            method: "DELETE"
        });
        deletedTask();
    };

    function deletedTask() {
        const updatedTasks = allTasks.filter(deletedTask => {
            return deletedTask.id !== task.id
        });
        setAllTasks(updatedTasks);
    };

    if (isManager || isUpperManag || isProjectHead) {
        setCanDelete(true)
    };


    return (
        <li>
            <TaskCompleteButton task={task} setAllTasks={setAllTasks}/>
            <h1>{task.title}</h1>
            <h3>{task.deadline}</h3>
            <UpdateTaskButton task={task} setAllTasks={setAllTasks}/>
            <button onClick={() => {handleDelete(task.id)}}>Delete Task</button>
        </li>
    );
};

export default TaskCard;