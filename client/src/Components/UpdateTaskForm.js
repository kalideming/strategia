import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';

function UpdateTaskForm({ task, onClose }) {

    const { id } = useParams();
    const [ taskInfo, setTaskInfo ] = useState({
        project_id: task.project_id,
        title: task.title,
        description: task.description,
        completed: task.completed,
        deadline: task.deadline
    });
    const [ tasks, setTasks ] = useState([])

    useEffect(() => {
        if(user) {
            fetch("/tasks")
            .then((r) => r.json())
            .then((tasks) => setTasks(tasks))
        };
    });

    function handleUpdateTask(e) {
        e.preventDefault();

        fetch(`/tasks/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(taskInfo)
        })
        .then(() => {setTasks(taskInfo)});

        onClose();
    };

    function handleChange(e) {
        setTaskInfo((prev) => {
            return {
                ...prev,
                [e.target.name]: e.target.value
            };
        });
    };

    return (
        <div>
            <h1>Edit Task Information:</h1>
            <form onSubmit={handleUpdateTask}>
                <div>
                    <label>Title:</label>
                    <input
                        type="text"
                        name="title"
                        value={taskInfo.title}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Deadline:</label>
                    <input
                        type="text"
                        name="deadling"
                        value={taskInfo.deadline}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Description:</label>
                    <input
                        type="text"
                        name="description"
                        value={taskInfo.description}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <button onClick={onClose}>Cancel</button>
                    <button type="submit">Save Task</button>
                </div>
            </form>
        </div>
    );
};

export default UpdateTaskForm;