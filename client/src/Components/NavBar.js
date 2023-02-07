import React, { useContext } from "react";
import { UserContext } from "../Context/UserProvider";
import { NavLink, useHistory } from "react-router-dom";
import AddProjLink from "./AddProjLink";
import ProjsLink from "./ProjsLink";

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
                    <br></br>
                    <nav>
                        <NavLink exact to="/home">Home</NavLink>
                        <NavLink exact to="/myaccount">My Account</NavLink>
                        <ProjsLink/>
                        <AddProjLink/>
                        <NavLink exact to="/login" onCLick={onLogOut}>Log Out</NavLink>
                    </nav>
                </div>
            )}
        </div>
    );
};

export default NavBar;