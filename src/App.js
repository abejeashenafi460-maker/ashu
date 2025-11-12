import React from "react";
import "./output.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/navbar";
import Project from "./components/project";
import Skills from "./components/Skills";
import Experience from "./components/exp";


function App() {
  return (
    <div>
    <Navbar/>
    <About/>
    <Project/>
    <Skills/>
    <Experience/>
    <Contact/>
    </div>


  );
}

export default App;
