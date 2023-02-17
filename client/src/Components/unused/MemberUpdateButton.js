import React, { useContext, useState } from "react";
import MemberUpdateForm from "./MemberUpdateForm";
import { ManagerContext } from "../../Context/ManagerProvider";
import { UpperManagContext } from "../../Context/UpperManagProvider";
import { ProjectHeadContext } from "../../Context/ProjectHeadProvider";

function MemberUpdateButton({ member, setRoles }) {

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
                        Update Member
                    </button>
                    { isPopUpOpen ? (
                        <MemberUpdateForm onClose={() => setIsPopUpOpen(false)} member={member} setRoles={setRoles}/>
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

export default MemberUpdateButton;