import React from "react";
import { Navigate, useNavigate } from "react-router-dom";


function Dashboard() {
    const navigate = useNavigate();
    const isAuthenticated = localStorage.getItem("auth") === "true";

    const handleLogout = () => {
        localStorage.removeItem("auth");
        navigate("/login");
    };

    if (!isAuthenticated) {
        return <Navigate to="/login" />
    }

    return (
        <div className="out">
            <div className="co">
                <h2>Welcome to your Dashboard</h2>
                <button onClick={handleLogout}>Logout</button>
            </div>
        </div>
    )
}


export default Dashboard