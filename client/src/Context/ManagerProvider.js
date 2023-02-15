import React, { createContext, useState, useEffect } from 'react';
// import { UserContext } from './UserProvider';

const ManagerContext = createContext();

function ManagerProvider({ children }) {

    const [ user, setUser ] = useState([]);
    const [ isManager, setIsManager ] = useState(true);

    useEffect(() => {
        fetch("/home")
          .then((r) => r.json())
          .then((user) => setUser(user));
      }, []);

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