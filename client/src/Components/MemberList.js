import React from "react";
import MemberCard from "./MemberCard";


function MemberList({ project, user }) {

    // console.log(project.project_roles)
    // const [ projectMembers, setProjectMembers ] = useState([]);
    const projectMembers = project.project_roles;

    console.log(projectMembers)
    
    if (!projectMembers) {
        return (
            <div>loading</div>
        );
    };

    // useEffect(() => {
    //     fetch(`/projects/${project.id}/project_roles`)
    //     .then((r) => r.json())
    //     .then((projectMembers) => setProjectMembers(projectMembers))
    // }, []);

    const mappedMembers = projectMembers.map(member => {
        return<MemberCard key={member.id} member={member} project={project} user={user}/>
    })

    return (
        <div>
            <div>{mappedMembers}</div>
        </div>
    );
};

export default MemberList;
