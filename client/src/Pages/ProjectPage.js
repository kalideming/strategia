import React, { useState, useEffect } from "react";
import MemberList from "../Components/MemberList";
import TaskList from "../Components/TaskList";
import ProjectInfo from "../Components/ProjectInfo";
import { useParams } from "react-router-dom";

function ProjectPage({ user }){

    const currentUser = user[0];
    const [ project, setProject ] = useState([]);
    const { id } = useParams();
    const [ allProjects, setAllProjects ] = useState([]);
    const [ canEdit, setCanEdit ] = useState(currentUser.manager === true || currentUser.upper_management === true ?
        (true) : (false));
    const [ showUpdate, setShowUpdate ] = useState(false);

    function switchProjectUpdate() {
        setShowUpdate(!showUpdate)
    };

    useEffect(() => {
        fetch(`/projects/${id}`)
        .then((r) => r.json())    
        .then((project) => setProject(project))    
    }, []);

    useEffect(() => {
        fetch("/projects")
        .then((r) => r.json())
        .then((allProjects) => setAllProjects(allProjects))
    }, []);

    const newForm = {
        title: "",
        description: "",
        photo: ""
    };

    const [ formData, setFormData ] = useState({
        title: project.title,
        description: project.description,
        photo: project.photo
    });

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({...formData, [name]: value})
    };

    function submitUpdate(e) {
        e.preventDefault();

        const updateProject = {
            title: formData.title,
            description: formData.description,
            photo: formData.photo
        };

        fetch(`/projects/${project.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updateProject),
        })
        .then((r) => r.json())
        .then((updatedProject) => {
            setAllProjects([...allProjects, updatedProject])
            setFormData({
                title: updatedProject.title,
                description: updatedProject.description,
                photo: updatedProject.photo
            });
        });

        setShowUpdate(false);
    };

    function deleteProject() {
        fetch(`/projects/${project.id}`, {
            method: "DELETE"
        })
        setAllProjects(allProjects.filter((oneProject) => {
            return oneProject.id !== project.id
        }));
    };

    return (
        <div className="project-page">
            <ProjectInfo className="project-info" project={project} user={user}/>
            <MemberList className="member-list-container" project={project} user={user}/>
            <TaskList project={project} user={user}/>
            {(!canEdit) ? (
                null
            ) : (
                <div>
                    <button onClick={deleteProject}>Delete Project</button>
                    {(!showUpdate) ? (
                        <button onClick={switchProjectUpdate}>Update Project</button>
                    ) : (
                        <div>
                            <h3>Update Project:</h3>
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
                                <label>Update Description:</label>
                                <input
                                    type="text"
                                    name="description"
                                    value={formData.description}
                                    onChange={handleChange}
                                />
                            </div>
                            <div>
                                <label>Update Project Photo:</label>
                                <input
                                    type="text"
                                    name="photo"
                                    value={formData.photo}
                                    onChange={handleChange}
                                />
                            </div>
                            <button type="submit">Submit Project</button>
                        </form>
                        <button onClick={switchProjectUpdate}>Hide Project Update</button>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default ProjectPage;