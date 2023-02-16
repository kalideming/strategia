import React, { useEffect, useState } from "react";

function HomePage({ user }){
    
    const firstName = user.first_name;
    const lastName = user.last_name;
    const position = user.position;
    const company = user.company;
    const photo = user.photo;

    console.log(position)

    const [ userRoles, setUserRoles ] = useState([]);
    
    useEffect(() => {
        fetch(`/users/${user.id}/project_roles`)
        .then((r) => r.json())
        .then((userRoles) => {
            setUserRoles(userRoles)
        })
    }, []);

    console.log(userRoles)
    console.log(user)

    // let roleHours = [];
    
    // userRoles.forEach((role) => {
    //     const projectHours = role.required_hours
    //     roleHours.push(projectHours);
    // })
    // console.log(userRoles)
    // useEffect(() => {
    //     fetch(`/users/${user.id}/project_roles`)
    //     .then((r) => {
    //         if(r.ok) {
    //             r.json().then((userRoles) => setUserRoles(userRoles))
    //         }
    //     })
    // }, [userRoles]);

    // console.log(userRoles)


    // user.map((role) => {
    //     let projectHours = role.required_hours
    //     roleHours.push(projectHours);
    //     return roleHours;
    // });

    // const totalProjectHours = roleHours.reduce((total, amount) => total + amount);
    // const availableHours = user.available_hours;
    // const remainingHours = availableHours - totalProjectHours;

    return (
        <div>
            <img src={photo} alt=""/>
            <h1>Hi, {firstName} {lastName}</h1>
            <h3>{position}</h3>
            <h3>{company}</h3>
            {/* <p>You have {remainingHours} remaining available hours this week.</p> */}
        </div>
    );
};

export default HomePage;