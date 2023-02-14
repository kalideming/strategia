import React, { useContext, createContext, useState } from 'react';
import { UserContext } from './UserProvider';

const ProjectContext = createContext();

function ProjectProvider({ children }) {

    const { user } = useContext(UserContext);

    const [ projects, setProjects ] = useState(true);

    useEffect(() => {
        if (user) {
            fetch("/projects")
            .then((r) => r.json())
            .then((projects) => setProjects(projects))
        }
    }, []);

    return (
        <ProjectContext.Provider value={{ projects, setProjects }}>
            { children }
        </ProjectContext.Provider>
    );
};

export { ProjectContext, ProjectProvider };