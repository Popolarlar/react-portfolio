import React from "react";

import Nav from "./components/Nav";
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
      <Nav />
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
