import React, { useContext, useState } from "react";
import UpdateTaskForm from "./UpdateTaskForm";
import { ManagerContext } from "../Context/ManagerProvider";
import { UpperManagContext } from "../Context/UpperManagProvider";
import { ProjectHeadContext } from "../Context/ProjectHeadProvider";

function UpdateTaskButton({ task }) {

    const { isManager } = useContext(ManagerContext);
    const { isUpperManag } = useContext(UpperManagContext);
    const { isProjectHead } = useContext(ProjectHeadContext);
    let [ isPopUpOpen, setIsPopUpOpen ] = useState(false);
    let [ canUpdate, setCanUpdate ] = useState(false);

    if (isManager || isUpperManag || isProjectHead) {
        setCanUpdate(true)
    };

    return (
        <div>
            { canUpdate ? (
                <div>
                    <button onClick={() => setIsPopUpOpen(true)}>
                        Update Task 
                    </button>
                    { isPopUpOpen ? (
                        <UpdateTaskForm onClose={() => setIsPopUpOpen(false)} task={task}/>
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

export default UpdateTaskButton;