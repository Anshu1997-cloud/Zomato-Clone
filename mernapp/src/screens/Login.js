import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login() {
    const [credentials, setCredentials] = useState({
        email: "",
        password: "",
    });

    let navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(`https://zomato-clone-hj2b.onrender.com/api/loginuser`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: credentials.email,
                    password: credentials.password,
                })
            });

            const json = await response.json();
            console.log(json);

            if (!json.success) {
                alert("Enter Valid Credentials");
            } else {
                localStorage.setItem("userEmail", credentials.email);
                localStorage.setItem("authToken", json.authToken);
                console.log(localStorage.getItem("authToken"));
                navigate("/");
            }
        } catch (error) {
            console.error("Error during login:", error);
            alert("An error occurred during login. Please try again.");
        }
    };

    const handleChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };

    return (
        <div className="container">
            <form onSubmit={handleSubmit} style={{ maxWidth: "650px", margin: "0 auto", marginTop: "100px", padding: "30px", border: "1px solid #ccc", borderRadius: '5px' }}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" name='email' value={credentials.email} onChange={handleChange} id="exampleInputEmail1" aria-describedby="emailHelp" required />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" name='password' value={credentials.password} onChange={handleChange} id="exampleInputPassword1" required />
                </div>
                <button type="submit" className="m-3 btn btn-success">Submit</button>
                <Link to="/createuser" className='m-3 btn btn-danger'>I'm a new user</Link>
            </form>
        </div>
    );
}
export default Login;