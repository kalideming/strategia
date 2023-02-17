import React, { useState, useEffect } from "react";

function TaskCard({ task, project, user }) {

    const currentUser = user[0];
    const [ tasks, setTasks ] = useState(project.tasks);
    const [ canEdit, setCanEdit ] = useState(currentUser.manager === true || currentUser.upper_management === true ?
        (true) : (false));
    const [ showUpdate, setShowUpdate ] = useState(false);


    function switchTaskUpdate() {
        setShowUpdate(!showUpdate)
    };

    const newForm = {
        title: "",
        description: "",
    };

    const [ formData, setFormData ] = useState({
        title: task.title,
        description: task.description,
    });

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({...formData, [name]: value})
    };

    function submitUpdate(e) {
        e.preventDefault();

        const updateTask = {
            title: formData.title,
            description: formData.description
        };

        fetch(`/tasks/${task.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updateTask),
        })
        .then((r) => r.json())
        .then((updatedTask) => {
            setTasks([...tasks, updatedTask])
            setFormData({
                title: updatedTask.title,
                description: updatedTask.description
            });
        });

        setShowUpdate(false);
    };

    function deleteTask() {
        fetch(`/tasks/${task.id}`, {
            method: "DELETE"
        })
        setTasks(tasks.filter((oneTask) => {
            return oneTask.id !==task.id
        }))
    };

    return (
    <div className="task-card">
        <h2 className="task-title">{task.title}</h2>
        <h1 className="task-deadline">{task.deadline}</h1>
        <p className="task-description">{task.description}</p>
        {(!canEdit) ? (
            null
        ) : (
            <div>
                <button onClick={deleteTask}>Remove Task</button>
                {(!showUpdate) ? (
                    <button onClick={switchTaskUpdate}>Update Task</button>
                ) : (
                    <div>
                        <h3>Update Task:</h3>
                        <form onSubmit={submitUpdate}>
                            <div>
                                <label>Update Title:</label>
                                <input
                                    type="text"
                                    name="title"
                                    value={formData.title}
                                    onChange={handleChange}
                                />
                            </div>
                            <div>
                                <label>Update Required Hours:</label>
                                <input
                                    type="text"
                                    name="description"
                                    value={formData.description}
                                    onChange={handleChange}
                                />
                            </div>
                            <button type="submit">Submit Update</button>
                        </form>
                        <button onClick={switchTaskUpdate}>Hide Task Update</button>
                    </div>
                )}
            </div>
        )}
    </div>
    );
};

export default TaskCard;