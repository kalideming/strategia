import React from "react";
import MemberCard from "./MemberCard";


function MemberList({ project, user }) {

    const projectMembers = project.project_roles;

    console.log(projectMembers)
    
    if (!projectMembers) {
        return (
            <div>loading</div>
        );
    };

    const mappedMembers = projectMembers.map(member => {
        return<MemberCard key={member.id} member={member} project={project} user={user}/>
    })

    return (
            <div className="member-cards">{mappedMembers}</div>
    );
};

export default MemberList;
