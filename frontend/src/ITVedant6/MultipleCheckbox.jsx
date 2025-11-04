import React, { useState } from "react";

function MultipleCheckbox() {
    const [selected, setSelected] = useState([]);

    const handleChange = (e) => {
        const value = e.target.value;

        if (selected.includes(value)) {
            setSelected(selected.filter((item) => item !== value));
        } else {
            setSelected([...selected, value]);
        }
    };

    return (
        <div className="cs">
            <h3>Select Your Hobbies</h3>
            <label>
                <input type="checkbox" value="Reading" onChange={handleChange} /> Reading
                <input type="checkbox" value="Traveling" onChange={handleChange} /> Traveling
                <input type="checkbox" value="Gaming" onChange={handleChange} /> Gaming
            </label>
            <p>Selected: {selected.join(", ")}</p>
        </div>
    );
}
export default MultipleCheckbox