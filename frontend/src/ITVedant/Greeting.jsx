import React from "react";
import './Greeting.css';

function Greeting() {
    const currentTime = new Date().getHours();

    let greeingMessage = "";

    if (currentTime < 12) {
        greeingMessage = "Good Morning";
    }
    else if (currentTime < 18) {
        greeingMessage = "Good Afternoon";
    }
    else {
        greeingMessage = "Good Evening";
    }

    return (
        <div className="out">
            <div className="in">
                <h2>{greeingMessage}</h2>
                <p>Have you Eaten?</p>
            </div>
        </div>
    );
};


export default Greeting;
