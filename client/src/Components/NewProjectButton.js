import React, { useContext, useState } from 'react';
import { ManagerContext } from '../Context/ManagerProvider';
import { UpperManagContext } from '../Context/UpperManagProvider';
import NewProjectForm from './NewProjectForm';

function NewProjectButton() {

    const { isManager } = useContext(ManagerContext);
    const { isUpperManag } = useContext(UpperManagContext);
    const [ isPopUpOpen, setIsPopUpOpen ] = useState(false);
    const [ canCreate, setCanCreate ] = useState(false)

    if (isManager || isUpperManag) {
        setCanCreate(true)
    };

    return (
        <div>
            {canCreate ? (
                <div>
                <button onClick={() => setIsPopUpOpen(true)}>
                    Create A Project 
                </button>
                { isPopUpOpen ? (
                    <NewProjectForm onClose={() => setIsPopUpOpen(false)}/>
                ) : (
                    (null)
                )}
                </div>
            ) : (
                (null)
            )}
        </div>
    );
};

export default NewProjectButton;