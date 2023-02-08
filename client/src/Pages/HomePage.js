import React, { useContext } from "react";
import { UserContext } from "../Context/UserProvider";
import UserSchedule from "../Components/UserSchedule";
import EventHighlight from "../Components/EventHighlight";
import AddEventForm from "../Components/AddEventForm";
import HomeGreeting from "../Components/HomeGreeting";

function HomePage(){

    let { user } = useContext(UserContext);
    

    return (
        <div>
            <HomeGreeting/>
            <UserSchedule/>
            <EventHighlight/>
            <AddEventForm/>
        </div>
    )
}

export default HomePage;