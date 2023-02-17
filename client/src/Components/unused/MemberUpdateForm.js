import React, { useState } from "react";

function MemberUpdateForm({ member, setRoles, onClose }) {

    const id = member.id
    const [ memberInfo, setMemberInfo ] = useState({
        user_id: member.user_id,
        project_id: member.project_id,
        role_title: member.role_title,
        project_head: member.project_head,
        required_hours: member.required_hours,
        description: member.description
    });

    function handleUpdateMember(e) {
        e.preventDefault();

        fetch(`/project_roles/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(memberInfo)
        })
        .then(() => {setRoles(memberInfo)});

        onClose();
    };

    function handleChange(e) {
        setMemberInfo((prev) => {
            return {
                ...prev,
                [e.target.name]: e.target.value
            };
        });
    };

    return (
        <div>
            <h1>Edit Member Information:</h1>
            <form onSubmit={handleUpdateMember}>
                <div>
                    <label>Role Title:</label>
                    <input
                        type="text"
                        name="role_title"
                        value={member.role_title}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Description:</label>
                    <input
                        type="text"
                        name="description"
                        value={member.description}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Required Hours:</label>
                    <input
                        type="text"
                        name="required_hours"
                        value={member.required_hours}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <button onClick={onClose}>Cancel</button>
                    <button type="submit">Save Member Info</button>
                </div>
            </form>
        </div>
    );
};

export default MemberUpdateForm;