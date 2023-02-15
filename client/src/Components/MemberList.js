import React from "react";
// import { UserContext } from "../Context/UserProvider";
import MemberCard from "./MemberCard";
// import NewMemberSearch from "./NewMemberSearch";

function MemberList({ projectMembers, project }) {

    // const { user } = useContext(UserContext);
    // const [ canAdd, setCanAdd ] = useState(false);

    const mappedMembers = projectMembers.map(member => {
        return<MemberCard key={member.id} member={member} project={project}/>
    })

    // if (user.manager === true || user.upper_management === true) {
    //     setCanAdd(true)
    // };

    return (
        <div>
            <ul>{mappedMembers}</ul>
            {/* <div>
                {canAdd ? (
                   <NewMemberSearch project={project}/> 
                ) : (
                    (null)
                )}
            </div>   */}
        </div>
    );
};

export default MemberList;
