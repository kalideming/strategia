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
        <div className="nav-container">
            {!user ? (
                <h1>Strategia</h1>
            ) : (
                <span className="nav">
                    <h1 className="nav-title" onClick={home}>Strategia</h1>
                    <nav>
                        <NavLink to="/home" className="nav-link">Home</NavLink>
                        <NavLink to="/myaccount" className="nav-link">My Account</NavLink>
                        <NavLink to="/myprojects" className="nav-link">My Projects</NavLink>
                        {/* <CompanyProjsLink user={user}/>
                        <NewProjectLink user={user}/> */}
                        <NavLink to="/logout" onClick={onLogOut} className="nav-link">Log Out</NavLink>
                    </nav>
                </span>
            )}
        </div>
    );
};

export default NavBar;