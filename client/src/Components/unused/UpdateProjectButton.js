import React, { useContext, useState } from "react";
import { ManagerContext } from "../../Context/ManagerProvider";
import { UpperManagContext } from "../../Context/UpperManagProvider";
import { ProjectHeadContext } from "../../Context/ProjectHeadProvider";
import UpdateProjectForm from "./UpdateProjectForm";

function UpdateProjectButton({ project }) {

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
                        Update Project
                    </button>
                    { isPopUpOpen ? (
                        <UpdateProjectForm onClose={() => setIsPopUpOpen(false)} project={project}/>
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

export default UpdateProjectButton;