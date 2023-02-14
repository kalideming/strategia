import React, { useContext, useState } from "react";
import { UserContext } from "../Context/UserProvider";
import { ManagerContext } from "../Context/ManagerProvider";
import { UpperManagContext } from "../Context/UpperManagProvider";
import { useHistory } from "react-router-dom";

function TaskCard({ tasks }) {

    const { user } = useContext(UserContext);
    const { isManager } = useContext(ManagerContext);
    const { isUpperManag } = useContext(UpperManagContext);
    const history =useHistory();
    let [ isPopUpOpen, setIsPopUpOpen ] = useState(false);

    function deleteTask() {
        
    };

    
};

export default TaskCard;