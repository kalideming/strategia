import React, { createContext, useState, useEffect, useContext } from 'react';
import { UserContext } from './UserProvider';

const ProjectContext = createContext();

function ProjectProvider({ children }) {

    const [ projects, setProjects ] = useState([]);
    const { user } = useContext(UserContext);

    useEffect(() => {
        fetch("/projects")
        .then((r) => r.json())
        .then((projects) => setProjects(projects))
    }, []);

    if(!user || !projects){
        return <div>Loading</div>
    };

    return (
        <ProjectContext.Provider value={{ projects, setProjects }}>
            { children }
        </ProjectContext.Provider>
    );
};

export { ProjectContext, ProjectProvider };