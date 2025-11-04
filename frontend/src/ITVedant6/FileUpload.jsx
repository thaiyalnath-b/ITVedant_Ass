import React, { useState } from "react";
import "./FileUpload.css";

function FileUpload() {
    const [file, setFile] = useState(null);

    const handleChange = (e) => {
        setFile(e.target.files[0]);
    }
    const handleSubmit = (e) => {
        e.preventDefault();

        if (file) {
            console.log("Selected file:", file);
            alert(`File "${file.name}" ready to upload!`);
        }
        else {
            alert("Please select a file first!")
        }
    }
    return (
        <div className="cs">
            <h2>React File Upload Example</h2>
            <form onSubmit={handleSubmit} className="cc">
                <input type="file" onChange={handleChange} />
                <button type="submit">Upload</button>
            </form>
        </div>
    );
}

export default FileUpload