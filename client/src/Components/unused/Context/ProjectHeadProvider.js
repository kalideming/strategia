import React, { useContext, createContext, useState } from 'react';
import { UserContext } from './UserProvider';

const ProjectHeadContext = createContext();

function ProjectHeadProvider({ children }) {

    const { user } = useContext(UserContext);

    const [ isProjectHead, setIsProjectHead ] = useState(true);

    if (user.project_role.project_head === true) {
        setIsProjectHead(true)
    } else {
        setIsProjectHead(false)
    };

    return (
        <ProjectHeadContext.Provider value={{ isProjectHead, setIsProjectHead }}>
            { children }
        </ProjectHeadContext.Provider>
    );
};

export { ProjectHeadContext, ProjectHeadProvider };