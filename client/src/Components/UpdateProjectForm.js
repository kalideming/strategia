import React, { useContext, useState } from "react";
import { ProjectContext } from "../Context/ProjectProvider";
import { useParams } from "react-router-dom";

function UpdateProjectForm({ onClose, project }) {

    let { setProjects } = useContext(ProjectContext);
    const { id } = useParams();

    const [ projectInfo, setProjectInfo ] = useState({
        company_id: project.company_id,
        title: project.title,
        description: project.description,
        deadline: project.deadline,
        photo: project.photo
    });

    function handleUpdateProject(e) {
        e.preventDefault();

        fetch(`projects/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(projectInfo)
        })
        .then(() => {setProjects(projectInfo)});

        onClose();
    };

    function handleChange(e) {
        setProjectInfo((prev) =>{
            return {
                ...prev,
                [e.target.name]: e.target.value
            };
        });
    };

    return (
        <div>
            <h1>Edit Project Information:</h1>
            <form onSubmit={handleUpdateProject}>
                <div>
                    <label>Title:</label>
                    <input
                        type="text"
                        name="title"
                        value={projectInfo.title}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Deadline:</label>
                    <input
                        type="text"
                        name="deadling"
                        value={projectInfo.deadline}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Description:</label>
                    <input
                        type="text"
                        name="description"
                        value={projectInfo.description}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Photo:</label>
                    <input
                        type="text"
                        name="photo"
                        value={projectInfo.photo}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <button onClick={onClose}>Cancel</button>
                    <button type="submit">Save Project</button>
                </div>
            </form>
        </div>
    );
};

export default UpdateProjectForm;