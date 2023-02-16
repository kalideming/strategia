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


    const totalProjectHours = roleHours.reduce((total, amount) => total + amount);
    const remainingHours = availableHours - totalProjectHours;

    console.log(remainingHours)

    return (
        <div className="container">
        <div className="container">
            <div className="avatar">
                <img src={photo} alt="" />
            </div>
            <div className="container">
            <div className="box">
                <h1 className="welcome-back">Welcome back, {firstName}.</h1>
                <h3 className="company-position">{position} at {company}</h3>
                <div className="hours-container">
                    <p className="remaining-hours">{remainingHours} </p>
                    <p className="remaining-hours-text"> remaining available hours this week.</p>
                </div>
            </div>
            </div>
        </div>
        </div>
    );
};

export default HomePage;