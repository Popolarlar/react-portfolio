import React from "react";

import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import SkillList from "./components/SkillList";
import About from "./components/About";
import ProjectList from "./components/ProjectList";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <div id="top"></div>
      <NavBar />
      <Hero />
      <About />
      <SkillList />
      <ProjectList />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
