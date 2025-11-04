import React from 'react';

function Header() {
  return (
    <header className="header">
      <h1>My Portfolio</h1>
      <nav>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
        <a href="#resume">Resume</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}

export default Header
