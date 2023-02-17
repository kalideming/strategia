import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
// import { ManagerContext } from '../Context/ManagerProvider';
// import { UpperManagContext } from '../Context/UpperManagProvider';

function NewProjectLink({ user }) {

    const [ canCreate, setCanCreate ] = useState(false)

    if (user[0].manager === true) {
        setCanCreate(true)
    } else if (user[0].upper_management === true) {
        setCanCreate(true)
    } else {
        setCanCreate(false)
    }

   
    // if (user[0].upper_management === true || user[0].manager === true) {
    //     setCanCreate(true)
    // };

    return (
        <div>
            {canCreate ? (
                <NavLink to="/newproject">Create A Project</NavLink>
            ) : (
                null
            )}
        </div>
    );
};

export default NewProjectLink;