import React from "react";
import "./App.css";
//Components
import Header from "./Components/Header/Header";
import Showcase from "./Components/Showcase/Showcase";
import About from "./Components/About/About";
import Skills from "./Components/Skills/Skills";
import Metodology from "./Components/Metodology/Metodology";
import Projects from "./Components/Projects/Projects";
import Contact from "./Components/Contact/Contact";

function App() {
  return (
    <div className="app">
      <Header />
      <Showcase />
      <About />
      <Skills />
      <Metodology />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
