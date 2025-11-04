import React from 'react';
import Header from './ITVedant12/Header';
import About from './ITVedant12/About';
import Projects from './ITVedant12/Projects';
import Skills from './ITVedant12/Skills';
import Resume from './ITVedant12/Resume';
import Contact from './ITVedant12/Contact';


function App() {
  return (
    <div>
      <Header />
      <section id="about"><About /></section>
      <section id="projects"><Projects /></section>
      <section id="skills"><Skills /></section>
      <section id="resume"><Resume /></section>
      <section id="contact"><Contact /></section>
    </div>
  );
  
}

export default App;
