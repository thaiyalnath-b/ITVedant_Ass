import React from 'react';

function Projects() {
  const projectList = [
    { title: 'Portfolio Website', desc: 'A personal portfolio built using React.' },
    { title: 'SneakerVerse', desc: 'E-commerce site for sneakers.' },
  ];

  return (
    <div className="section">
      <h2>Projects</h2>
      <ul>
        {projectList.map((p, index) => (
          <li key={index}>
            <strong>{p.title}</strong>: {p.desc}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default  Projects
