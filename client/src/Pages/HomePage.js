import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../Context/UserProvider";

function HomePage(){
    
    const { user } = useContext(UserContext);
    const [ userRoles, setUserRoles ] = useState([]);

    useEffect(() => {
        fetch(`/users/${user.id}/project_roles`)
        .then((r) => r.json())
        .then((userRoles) => setUserRoles(userRoles));
    }, []);

    if(!user || !userRoles){
        return <div>Loading</div>
    };

    const firstName = user.first_name;
    const lastName = user.last_name;
    const position = user.position;
    const company = user.company;
    const picture = user.image;

    const roleHours = [];

    userRoles.map((role) => {
        let projectHours = role.required_hours
        roleHours.push(projectHours);
    });

    const totalProjectHours = roleHours.reduce((total, amount) => total + amount);
    const availableHours = user.available_hours;
    const remainingHours = availableHours - totalProjectHours;

    return (
        <div>
            <img src={picture}/>
            <h1>Hi, {firstName} {lastName}</h1>
            <h3>{position}</h3>
            <h3>{company}</h3>
            <p>You have {remainingHours} remaining available hours this week.</p>
        </div>
    );
};

export default HomePage;