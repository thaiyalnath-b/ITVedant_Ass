import React from 'react';
import resume from "../assets/Resume.pdf"

function Resume() {
  
  return (
    <div className="section">
      <h2>Resume</h2>
      <a href={resume} target="_blank" rel="noreferrer">Download Resume</a>
    </div>
  );
}

export default Resume
