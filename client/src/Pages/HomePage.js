import React, { useContext, useState, useEffect } from "react";
import { UserContext } from "../Context/UserProvider";
import UserSchedule from "../Components/UserSchedule";
import EventHighlight from "../Components/EventHighlight";
import AddEvent from "../Components/AddEvent";
import HomeGreeting from "../Components/HomeGreeting";

function HomePage(){

    let { user, setUser } = useContext(UserContext);
    
    const { userData, setUserData } = useState({})

    useEffect(() => {
        fetch("/home")
        .then((r) => r.json())
        .then((userData) => setUserData(userData))
    }, []);

    const userSchedule = userData.schedule


    return (
        <div>
            <HomeGreeting/>
            <UserSchedule userSchedule={userSchedule}/>
            <EventHighlight userSchedule={userSchedule}/>
            <AddEvent/>
        </div>
    )
}

export default HomePage;