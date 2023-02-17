import React from "react";
import TaskCard from "./TaskCard";

function TaskList({ project, user}) {

    const projectTasks = project.tasks 

    if(!projectTasks) {
        return (
            <div>loading</div>
        );
    };

    const mappedProjectTasks = projectTasks.map(task => {
        return <TaskCard key={task.id} task={task} project={project} user={user}/>
    })

    return (
        <div>{mappedProjectTasks}</div>
    );
};

export default TaskList;