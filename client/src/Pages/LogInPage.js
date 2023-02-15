import React, { useContext, useState } from "react";
import { UserContext } from "../Context/UserProvider";
import { useHistory, Link } from "react-router-dom";

function LogInPage(){

    const [errors, setErrors] = useState([]);
    let { setUser } = useContext(UserContext);
    let history = useHistory();

    const [credentials, setCredentials] = useState({
        username: "",
        password: ""
    });

    function handleChange(e) {
        setCredentials((prevCredentials) => {
            return {
                ...prevCredentials,
                [e.target.name]: e.target.value
            };
        });
    };

    function handleSubmit(e) {
        e.preventDefault();

        fetch("/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(credentials)
        }).then((r) => {
            if(r.ok) {
                r.json().then((currentUser) => setUser(currentUser));
                history.push("/home")
            } else {
                r.json().then((err) => setErrors(err.errors));
            };
        }, []);
    };

    function handleToSignUpPage() {
        history.push("/signup")
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h2>Strategize Serendipity</h2> 

                <div>
                    <label>Username: </label>
                    <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={credentials.username}
                    onChange={handleChange}
                    />
                </div>
        
                <div>
                    <label> Password: </label>
                    <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={credentials.password}
                    onChange={handleChange}
                    />
                </div>
                <button type="submit">Log In</button>
            </form>

            <div>
            <label> New to Strategia?</label>
            <Link onClick={handleToSignUpPage}>Sign Up</Link>
            </div>
  
            <div>
                {errors.map((err) => (
                <p key={err}>{err}</p>
                ))}
            </div>
        </div> 
    );
};

export default LogInPage;