import React from "react";
import { NavLink, useHistory } from "react-router-dom";
// import CompanyProjsLink from "./CompanyProjsLink";
// import NewProjectLink from "./NewProjectLink";

function NavBar({ user, setUser }) {

    let history = useHistory();

    function onLogOut() {
        fetch("/logout", {
            method: "DELETE"
        }).then((r) => {
            if (r.ok) {
                setUser(null)
            }
        }, []);
    };

    function home() {
        history.push("/home")
    };

    return (
        <div>
            {!user ? (
                <h1>Strategia</h1>
            ) : (
                <div>
                    <h1 onClick={home}>Strategia</h1>
                    <nav>
                        <NavLink to="/home">Home</NavLink>
                        <NavLink to="/myaccount">My Account</NavLink>
                        <NavLink to="/myprojects">My Projects</NavLink>
                        {/* <CompanyProjsLink user={user}/>
                        <NewProjectLink user={user}/> */}
                        <NavLink to="/logout" onClick={onLogOut}>Log Out</NavLink>
                    </nav>
                </div>
            )}
        </div>
    );
};

export default NavBar;