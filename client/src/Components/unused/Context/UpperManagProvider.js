import React, { useContext, createContext, useState } from 'react';
import { UserContext } from './UserProvider';

const UpperManagContext = createContext();

function UpperManagProvider({ children }) {

    const { user } = useContext(UserContext);

    const [ isUpperManag, setIsUpperManag ] = useState(true);

    if (user.upper_management === true) {
        setIsUpperManag(true)
    } else {
        setIsUpperManag(false)
    };

    return (
        <UpperManagContext.Provider value={{ isUpperManag, setIsUpperManag }}>
            { children }
        </UpperManagContext.Provider>
    );
};

export { UpperManagContext, UpperManagProvider };