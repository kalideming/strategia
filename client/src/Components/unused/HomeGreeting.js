import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../Context/UserProvider";

function HomeGreeting() {

    const { user } = useContext(UserContext);
    const [ userEvents, setUserEvents ] = useState([])
    //console.log(user)
    
    useEffect(() => {
        fetch("/myevents")
        .then((r) => r.json())
        .then((userEvents) => setUserEvents(userEvents));
    }, []);

    if(!user || !userEvents){
        return <div>Loading</div>
    }
    const firstName = user.first_name
    const lastName = user.last_name
    const position = user.position 
    const company = user.company 
    const picture = user.image
    
    const eventHoursArr = [] 
    userEvents.map((event) =>{
        let eventHours = event.hours_taken
        eventHoursArr.push(eventHours)
    });
    
    const availableHours = user.available_hours
    const totalEventHours = eventHoursArr.reduce((total, amount) => total + amount)
    console.log(availableHours)
    console.log(totalEventHours)
    // const remainingHours = (availableHours, totalEventHours) => {
    //    return (availableHours - totalEventHours)
    // }
    const remainingHours = availableHours - totalEventHours
    console.log(remainingHours)
    

    // const renderRemainingHours = (user, eventHoursArr) => {
    //     const available_hours = user.available_hours
    //     const totalEventHours = eventHoursArr.reduce((total, amount) => total + amount)
    //     remainingHours = available_hours - totalEventHours
    // }
    // function renderRemainingHours(user, eventHoursArr) {
    //     let availableHours = user.available_hours 
    //     let totalEventHours = eventHoursArr.reduce((total, amount) => total + amount)

    //     const remainingHours = availableHours - totalEventHours
    //     return remainingHours
    // };

    return (
        <div>
            <img src={picture}/>
            <h1>Hi, {firstName} {lastName}</h1>
            <h3>{position}</h3>
            <h3>{company}</h3>
            <p>You have {remainingHours} available hours remaining this week.</p>
        </div>
    );
};

export default HomeGreeting;