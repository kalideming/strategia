import React, { useContext } from "react";
import { UserContext } from "../Context/UserProvider";
import { NavLink, useHistory } from "react-router-dom";
import CompanyProjsLink from "./CompanyProjsLink";

function NavBar() {

    let { user, setUser } = useContext(UserContext);
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
                        <NavLink exact to="/home">Home</NavLink>
                        <NavLink exact to="/myaccount">My Account</NavLink>
                        <NavLink exact to="/myprojects">My Projects</NavLink>
                        <CompanyProjsLink/>
                        <NavLink exact to="/login" onClick={onLogOut}>Log Out</NavLink>
                    </nav>
                </div>
            )}
        </div>
    );
};

export default NavBar;