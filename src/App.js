import React from 'react';
import './App.css';
import Banar from './Banar/banar'
import Navbar from './Navbar/Nav'
import About from './About/About'
import Skills from './Skills/skill'
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';



function App() {
  return (
    <div className="App">
      <Banar />
      <Navbar />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
