import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function LogInPage({ user, setUser, onLogin }){

    const [errors, setErrors] = useState([]);
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

        fetch("/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(credentials)
        }).then((r) => {
            if(r.ok) {
                r.json().then((user) => setUser(user));
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
            <button onClick={handleToSignUpPage}>Sign Up</button>
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