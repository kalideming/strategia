import React, { useState, useEffect } from "react";
// import MemberUpdateButton from "./MemberUpdateButton";

function MemberCard({ member, project, user }) {
    
    const currentUser = user[0];
    const [ members, setMembers ] = useState(project.project_roles);
    const [ memberUser, setMemberUser ] = useState([]);
    const [ canEdit, setCanEdit ] = useState(currentUser.manager === true || currentUser.upper_management === true ?
    (true) : (false));
    const [ showMemberUpdate, setShowMemberUpdate ] = useState(false);

    useEffect(() => {
        fetch(`/users/${member.user_id}`)
        .then((r) => r.json())
        .then((memberUser) => setMemberUser(memberUser))
    }, []);

    function switchMemberUpdate() {
        setShowMemberUpdate(!showMemberUpdate)
    };

    const newForm = {
        role_title: "",
        required_hours: "",
        description: ""
    };

    const [ formData, setFormData ] = useState({
        roleTitle: member.role_title,
        requiredHours: member.required_hours,
        description: member.description
    });

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({...formData, [name]: value})
    };

    function submitUpdate(e) {
        e.preventDefault();

        const updateMember = {
            role_title: formData.roleTitle,
            required_hours: formData.requiredHours,
            description: formData.description
        };

        fetch(`/project_roles/${member.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updateMember),
        })
        .then((r) => r.json())
        .then((updatedMember) => {
            setMembers([...members, updatedMember])
            setFormData({
                roleTitle: updatedMember.role_title,
                requiredHours: updatedMember.required_hours,
                description: updatedMember.description
            });
        });

        setShowMemberUpdate(false);
    };

    function deleteMember() {
        fetch(`/project_roles/${member.id}`, {
            method: "DELETE"
        })
        setMembers(members.filter((oneMember) => {
            return oneMember.id !==member.id
        }))
    };

    return (
        <div>
            <img src={memberUser.photo} alt=""/>
            <h2>{memberUser.first_name} {memberUser.last_name}</h2>
            <h1>{member.role_title}</h1>
            <p>{member.description}</p>
            {(!canEdit) ? (
                null
            ) : (
                <div>
                    {(!showMemberUpdate) ? (
                        <button onClick={switchMemberUpdate}>Update Project Member</button>
                    ) : (
                        <div>
                            <h3>Update Member Information</h3>
                            <form onSubmit={submitUpdate}>
                                <div>
                                    <label>Update Role:</label>
                                    <input
                                        type="text"
                                        name="roleTitle"
                                        value={formData.roleTitle}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div>
                                    <label>Update Required Hours:</label>
                                    <input
                                        type="text"
                                        name="requiredHours"
                                        value={formData.requiredHours}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div>
                                    <label>Update Description:</label>
                                    <input
                                        type="text"
                                        name="description"
                                        value={formData.description}
                                        onChange={handleChange}
                                    />
                                </div>
                                <button type="submit">Submit Update</button>
                            </form>
                            <button onClick={switchMemberUpdate}>Hide Member Update</button>
                        </div>
                    )}
                    <button onClick={deleteMember}>Remove Project Member</button>
                </div>
            )}
        </div>
    );
};

export default MemberCard;









    // if (currentUser.manager === true) {
    //     setCanEdit(true)
    // } else if (currentUser.upper_management === true) {
    //     setCanEdit(true)
    // } else {
    //     setCanEdit(false)
    // }

    // const [ canEdit, setCanEdit ] = useState(false);

    // function handleDelete(e) {
    //     fetch(`/project_roles/${member.id}`, {
    //         method: "DELETE"
    //     });
    //     deletedMember();
    // };

    // function deletedMember() {
    //     const updatedMembers = roles.filter(deletedMember => {
    //         return deletedMember.id !== member.id 
    //     });
    //     setRoles(updatedMembers);
    // };