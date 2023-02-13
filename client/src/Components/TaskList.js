import React from "react";
import TaskCard from "./TaskCard";

function TaskList({ projectTasks }) {

    const mappedTasks = projectTasks.map(task => {
        return <TaskCard key={task.id} tasks={task}/>
    });

    return (
        <ul>
            {mappedTasks}
        </ul>
    )
};

export default TaskList;