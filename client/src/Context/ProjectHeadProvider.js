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
        <ManagerContext.Provider value={{ isProjectHead, setIsProjectHead }}>
            { children }
        </ManagerContext.Provider>
    );
};

export { ProjectHeadContext, ProjectHeadProvider };