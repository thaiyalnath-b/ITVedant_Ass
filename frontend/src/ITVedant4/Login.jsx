import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const handleLogin = (e) => {
        e.preventDefault();

        if (username === "admin" && password === "1234") {
            localStorage.setItem("auth", "true");
            navigate("/dashboard");
        } else {
            setError("Invalid Username or Password");
        }
    };
    return (
        <div className="out">
            <div className="co">
                <h2>Login Page</h2>
                <form onSubmit={handleLogin}>
                    <input type="text" placeholder="Username"
                        value={username} onChange={(e) => setUsername(e.target.value)} /> <br /> <br />
                    <input type="password" placeholder="Password"
                        value={password} onChange={(e) => setPassword(e.target.value)} /> <br /> <br />
                    <button type="submit">Login</button>
                </form>
                {error && <p>{error}</p>}
            </div>
        </div>
    );
}
export default Login