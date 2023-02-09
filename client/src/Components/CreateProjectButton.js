import React, { useContext, useState } from "react";
import { UserContext } from "../Context/UserProvider";
import { useHistory } from "react-router-dom";

function CreateProjectButton() {

    let { user } = useContext(UserContext);
    let history = useHistory();
    let [isManag, setIsManag] = useState(true);

    if (user.manager === false || user.upper_management === false) {
        setIsManag(false);
    };

    function handleCreateNewProject() {
        history.push("/newproject");
    };


    return (
        <div>
            {!isManag ? (
                (null) 
            ) : (
               <button onClick={handleCreateNewProject}>Create New Project</button>
            )};
        </div>
    );
};

export default CreateProjectButton;