import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { ManagerContext } from '../Context/ManagerProvider';
import { UpperManagContext } from '../Context/UpperManagProvider';

function NewProjectLink() {

    const { isManager } = useContext(ManagerContext);
    const { isUpperManag } = useContext(UpperManagContext);
    const [ canCreate, setCanCreate ] = useState(false)

    if (isManager || isUpperManag) {
        setCanCreate(true)
    };

    return (
        <div>
            {canCreate ? (
                <NavLink exact to="/newproject">Create A Project</NavLink>
            ) : (
                (null)
            )}
        </div>
    );
};

export default NewProjectLink;