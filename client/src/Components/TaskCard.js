import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import UpdateTaskButton from "./UpdateTaskButton";


function TaskCard({ task }) {

    return (
        <UpdateTaskButton task={task}/>
    )
};

export default TaskCard;