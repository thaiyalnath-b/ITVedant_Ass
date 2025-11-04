import React, { useState } from "react";
import './LoginStatus.css'

function LoginStatus(){
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <div className="out">
            <div className="in">
                {isLoggedIn && <h2>You are Logged in</h2> }

                <button onClick={ ()=>setIsLoggedIn(!isLoggedIn) }>{isLoggedIn ? "Logout" : "Login"}</button>
            </div>
        </div>
    );
}

export default LoginStatus;