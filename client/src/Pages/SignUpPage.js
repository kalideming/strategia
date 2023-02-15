import React, {useContext, useState} from "react";
import { UserContext } from "../Context/UserProvider";
import { useHistory } from 'react-router-dom';

function SignUpPage() {

    const [errors, setErrors] = useState([]);

    let { setUser } = useContext(UserContext);
    let history = useHistory();

    const [credentials, setCredentials] = useState({
        first_name: "",
        last_name: "",
        company: "",
        position: "",
        email: "",
        username: "",
        password: "",
        password_confirmation: ""
    });

    function handleChange(e) {
        setCredentials((prevCredentials) => {
            return {
                ...prevCredentials,
                [e.target.name]: e.target.value 
            }
        })
    };

    function handleSignUp(e) {
        e.preventDefault();
        setErrors([]);

        fetch("/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            }, 
            body: JSON.stringify(credentials)
        })
        .then((r) => {
            if (r.ok) {
                r.json().then((user) => setUser(user));
                history.push("/home");
            } else {
                r.json().then((err) => setErrors(err.errors));
            }
        }, []);
    };

    function handleToLogInPage() {
        history.push("/")
    };

    return (
        <div>
             <h1>Start Strategizing</h1>

        <form onSubmit={handleSignUp}>

            <div>
                <label>First Name: </label>
                <input
                    type="text"
                    name="first_name"
                    value={credentials.first_name}
                    onChange={handleChange}
                />
            </div>

            <div>
                <label>Last Name: </label>
                <input
                    type="text"
                    name="last_name"
                    value={credentials.last_name}
                    onChange={handleChange}
                />
            </div>

            <div>
                <label>Company: </label>
                <input
                    className="SignUpFormInput"
                    type="text"
                    name="company"
                    value={credentials.company}
                    onChange={handleChange}
                />
            </div>

            <div>
                <label>Position: </label>
                <input
                    type="text"
                    name="position"
                    value={credentials.position}
                    onChange={handleChange}
                />
            </div>

            <div>
                <label>Email: </label>
                <input
                    type="text"
                    name="email"
                    value={credentials.email}
                    onChange={handleChange}
                />
            </div>

            <div>
                <label>Username: </label>
                <input
                    type="text"
                    name="username"
                    value={credentials.username}
                    onChange={handleChange}
                />
            </div>

            <div>
                <label>Password: </label>
                <input
                    type="password"
                    name="password"
                    value={credentials.password}
                    onChange={handleChange}
                    autoComplete="current-password"
                />
            </div>

            <div>
                <label>Confirm Password: </label>
                <input
                    type="password"
                    name="password_confirmation"
                    value={credentials.password_confirmation}
                    onChange={handleChange}
                    autoComplete="current-password"
                />
            </div>

            <br></br>

            <button type="submit" className="FormBtn">
            Create Account
            </button>

                <br></br>
                <br></br>

            <label> Already Using Strategia? </label>
            <button onClick={handleToLogInPage}>Login</button>
        </form>

            <div>
                {errors.map((err) => (
                <p key={err}>{err}</p>
                ))}
            </div>
        </div>
    );
}

export default SignUpPage;