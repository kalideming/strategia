import React, { useContext, createContext, useState } from 'react';
import { UserContext } from './UserProvider';

const ManagerContext = createContext();

function ManagerProvider({ children }) {

    const { user } = useContext(UserContext);

    const [ isManager, setIsManager ] = useState(true);

    if (user.manager === true) {
        setIsManager(true)
    } else {
        setIsManager(false)
    };

    return (
        <ManagerContext.Provider value={{ isManager, setIsManager }}>
            { children }
        </ManagerContext.Provider>
    );
};

export { ManagerContext, ManagerProvider };