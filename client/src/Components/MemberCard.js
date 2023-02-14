import React, { useContext, useState, useEffect } from "react";
import { ManagerContext } from "../Context/ManagerProvider";
import { UpperManagContext } from "../Context/UpperManagProvider";
import { ProjectHeadContext } from "../Context/ProjectHeadProvider";
import { UserContext } from "../Context/UserProvider";
import MemberUpdateButton from "./MemberUpdateButton";

function MemberCard({ member, project }) {

    const { isManager } = useContext(ManagerContext);
    const { isUpperManag } = useContext(UpperManagContext);
    const { isProjectHead } = useContext(ProjectHeadContext);
    const [ roles, setRoles ] = useState([]);
    const { user } = useContext(UserContext);
    const [ canDelete, setCanDelete ] = useState(false);
    const id = project.id

    useEffect(() => {
        if(user) {
            fetch(`/projects/${id}/project_roles`)
            .then((r) => r.json())
            .then((roles) => setRoles(roles))
        };
    }, []);

    function handleDelete(e) {
        fetch(`/project_roles/${member.id}`, {
            method: "DELETE"
        });
        deletedMember();
    };

    function deletedMember() {
        const updatedMembers = roles.filter(deletedMember => {
            return deletedMember.id !== member.id 
        });
        setRoles(updatedMembers);
    };

    if (isManager || isUpperManag || isProjectHead) {
        setCanDelete(true)
    };

    return (
        <li>
            <img src={member.user.photo}/>
            <h2>{member.user.first_name} {member.user.last_name}</h2>
            <h1>{member.role_title}</h1>
            <p>{member.description}</p>
            <MemberUpdateButton member={member} setRoles={setRoles}/>
            <div>
                {canDelete ? (
                    <button onClick={() => {handleDelete(member.id)}}>Remove Member</button>
                ) : (
                    (null)
                )}
            </div>
        </li>
    );
};

export default MemberCard;