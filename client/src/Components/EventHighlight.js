import React from "react";
import UpdateEvent from "./UpdateEvent";
import DeleteEvent from "./DeleteEvent";

function EventHighlight() {

    return(
        <div>
            <UpdateEvent/>
            <DeleteEvent/>
        </div>
    )
};

export default EventHighlight;