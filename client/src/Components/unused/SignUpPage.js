import React, { useState, } from "react";
import { useHistory } from 'react-router-dom';

function SignUpPage({ user, setUser }) {

    const [errors, setErrors] = useState([]);
    let history = useHistory();

    const newForm = {
        first_name: '',
        last_name: '',
        company: '',
        position: '',
        email: '',
        username: '',
        password: ''
    }

    const [ formData, setFormData ] = useState(newForm);

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({...formData, [name]: value })
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const formSubmit = {
            first_name: formData.first_name,
            last_name: formData.last_name,
            company: formData.company,
            position: formData.position,
            email: formData.email,
            username: formData.username,
            password: formData.password
        };

        fetch("/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            }, 
            body: JSON.stringify(formSubmit),
        }).then((r) => {
            if (r.ok) {
                r.json().then((user) => setUser(user));
                history.push("/home")
            } else {
                r.json().then((err) => setErrors(err.errors));
            }
        })
    };


    // const [credentials, setCredentials] = useState({
    //     first_name: "",
    //     last_name: "",
    //     company: "",
    //     position: "",
    //     email: "",
    //     username: "",
    //     password: "",
    //     password_confirmation: ""
    // });

    // function handleChange(e) {
    //     setCredentials((prevCredentials) => {
    //         return {
    //             ...prevCredentials,
    //             [e.target.name]: e.target.value 
    //         }
    //     })
    // };

    // function handleSignUp(e) {
    //     e.preventDefault();
    //     setErrors([]);

    //     fetch("/signup", {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json"
    //         }, 
    //         body: JSON.stringify(credentials)
    //     })
    //     .then((r) => {
    //         if (r.ok) {
    //             r.json().then((user) => setUser(user));
    //             history.push("/home");
    //         } else {
    //             r.json().then((err) => setErrors(err.errors));
    //         }
    //     }, []);
    // };

    function handleToLogInPage() {
        history.push("/login")
    };

    return (
        <div>
             <h1>Start Strategizing</h1>

        <form onSubmit={handleSubmit}>

            <div>
                <label>First Name: </label>
                <input
                    type="text"
                    name="first_name"
                    value={formData.first_name}
                    onChange={handleChange}
                />
            </div>

            <div>
                <label>Last Name: </label>
                <input
                    type="text"
                    name="last_name"
                    value={formData.last_name}
                    onChange={handleChange}
                />
            </div>

            <div>
                <label>Company: </label>
                <input
                    className="SignUpFormInput"
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                />
            </div>

            <div>
                <label>Position: </label>
                <input
                    type="text"
                    name="position"
                    value={formData.position}
                    onChange={handleChange}
                />
            </div>

            <div>
                <label>Email: </label>
                <input
                    type="text"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                />
            </div>

            <div>
                <label>Username: </label>
                <input
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                />
            </div>

            <div>
                <label>Password: </label>
                <input
                    type="password"
                    name="password"
                    value={formData.password}
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