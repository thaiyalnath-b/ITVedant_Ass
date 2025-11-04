import React, { useState } from "react";
import "./DependentDropdown.css";

function DependentDropdown() {
    const data = {
        India: ["Tamil Nadu", "Kerala", "Karnataka"],
        USA: ["Texas", "Florida", "California"]
    };
    const [country, setCountry] = useState("");
    const [states, setStates] = useState([]);
    const handleCountryChange = (e) => {
        const selectedCountry = e.target.value;
        setCountry(selectedCountry);
        setStates(data[selectedCountry] || []);
    };
    return (
        <div className="cs">
            <h3>Dependent Dropdown</h3>
            <label>Country:</label>
            <select value={country} onChange={handleCountryChange}>
                <option value="">--Select Country--</option>
                {Object.keys(data).map((country) => (
                    <option key={country} value={country}>{country}</option>
                ))}
            </select> <br /> <br />
            <label>State:</label>
            <select disabled={!country}>
                <option value="">--Select State--</option>
                {states.map((states) => (
                    <option key={states} value={states}>{states}</option>
                ))}
            </select>
        </div>)
}
export default DependentDropdown
