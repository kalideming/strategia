import React, { useState, useContext } from "react";
import { UserContext } from "../../Context/UserProvider";

function TaskCompleteButton ({ task, allTasks, setAllTasks }) {

    const [ isComplete, setIsComplete ] = useState(false)
    const { user } = useContext(UserContext);
    const id = task.id 
    const [ taskInfo, setTaskInfo ] = useState({
        project_id: task.project_id,
        title: task.title,
        description: task.description,
        completed: task.completed,
        deadline: task.deadline
    });

    if (task.completed === true) {
        setIsComplete(true)
    };

    function handleChange(e) {
        setIsComplete(!isComplete)

        e.preventDefault();

        if (user) {
                   fetch(`tasks/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(taskInfo)
        })
        .then(() => {setAllTasks(taskInfo)});
        };
        
        setTaskInfo((prev) =>{
            return {
                ...prev,
                completed: e.target.checked
            };
        });
    };

    return (
        <div>
            <input type="checkbox" checked={isComplete} onChange={handleChange}/>
        </div>
    );
};

export default TaskCompleteButton;