import React, { useState } from "react";
import LogInForm from "../Components/LogInForm";
import SignUpForm from "../Components/SignUpForm";

function LogInPage({ onLogin }){

    const [ show, setShow ] = useState(true);

    return (
        show ? (
            <div className="login-container">
                <LogInForm onLogin={onLogin}/>
                <br></br>
                <div className="alt-container">
                    <p className="alt-text">Don't have an account?</p>
                    <button className="alt-bttn" onClick={() => setShow(false)}>Sign Up</button>
                    <br></br>
                </div>
            </div>
        ) : (
            <div className="login-container">
                <SignUpForm onLogin={onLogin}/>
                <br></br>
                <div className="alt-conatiner">
                    <p className="alt-text">Already have an account?</p>
                    <button className="alt-bttn" onClick={() => setShow(true)}>Log In</button>
                    <br></br>
                </div>
            </div>
        )
    );

    // const [errors, setErrors] = useState([]);
    // let history = useHistory();

    // const [credentials, setCredentials] = useState({
    //     username: "",
    //     password: ""
    // });

    // function handleChange(e) {
    //     setCredentials((prevCredentials) => {
    //         return {
    //             ...prevCredentials,
    //             [e.target.name]: e.target.value
    //         };
    //     });
    // };

    // function handleSubmit(e) {
    //     e.preventDefault();

    //     fetch("/login", {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json"
    //         },
    //         body: JSON.stringify(credentials)
    //     }).then((r) => {
    //         if(r.ok) {
    //             r.json().then((user) => setUser(user));
    //             history.push("/home")
    //         } else {
    //             r.json().then((err) => setErrors(err.errors));
    //         };
    //     }, []);
    // };

    // function handleToSignUpPage() {
    //     history.push("/signup")
    // };

    // return (
    //     <div>
    //         <form onSubmit={handleSubmit}>
    //             <h1>Strategia</h1> 

    //             <div>
    //                 <label>Username</label>
    //                 <input
    //                 type="text"
    //                 name="username"
    //                 placeholder=""
    //                 autoComplete="off"
    //                 value={credentials.username}
    //                 onChange={handleChange}
    //                 />
    //             </div>
    //             <div>
    //                 <label for="password">Password</label>
    //                 <input
    //                 autoComplete="off"
    //                 type="password"
    //                 name="password"
    //                 value={credentials.password}
    //                 onChange={handleChange}
    //                 />
    //             </div>
    //             <button type="submit">Login</button>
    //         </form>

    //         <div>
    //         <label> New to Strategia?</label>
    //         <button onClick={handleToSignUpPage}>Sign Up</button>
    //         </div>
  
    //         <div>
    //             {errors.map((err) => (
    //             <p key={err}>{err}</p>
    //             ))}
    //         </div>
    //     </div> 
    // );
};

export default LogInPage;