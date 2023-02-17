import React, { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
// import CompanyProjsLink from "./CompanyProjsLink";
// import NewProjectLink from "./NewProjectLink";

function NavBar({ user, setUser }) {

    const currentUser = user[0];
    let history = useHistory();
    const [ isManager, setIsManager ] = useState(currentUser.manager === true || currentUser.upper_management === true ?
        (true) : (false));

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
                        {(!isManager) ? (
                            null
                        ) : (
                            <>
                                <NavLink to="/companyprojects" className="nav-link">Company Projects</NavLink>
                                {/* <NavLink to="/newproject" className="nav-link">New Project</NavLink>  */}
                            </>
                        )}
                        <NavLink to="/logout" onClick={onLogOut} className="nav-link">LogOut</NavLink>
                    </nav>
                </span>
            )}
        </div>
    );
};

export default NavBar;