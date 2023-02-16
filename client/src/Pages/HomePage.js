import React from "react";

function HomePage({ user, setUser }){
    
    const firstName = user[0].first_name;
    const lastName = user[0].last_name;
    const position = user[0].position;
    const company = user[0].company.name;
    const photo = user[0].photo;
    const availableHours = user[0].available_hours
    const userRoles = user[0].project_roles

    const roleHours = []

    userRoles.map((role) => {
       const requiredHours = role.required_hours
       roleHours.push(requiredHours)
    });

    console.log(roleHours)

    const totalProjectHours = roleHours.reduce((total, amount) => total + amount);
    const remainingHours = availableHours - totalProjectHours;

    console.log(remainingHours)

    return (
        <div>
            <img src={photo} alt=""/>
            <h1>Hi, {firstName} {lastName}</h1>
            <h3>{position}</h3>
            <h3>{company}</h3>
            <p>You have {remainingHours} remaining available hours this week.</p>
        </div>
    );
};

export default HomePage;