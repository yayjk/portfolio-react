import React from "react";
import About from "./contentComponents/About";
import Bio from "./contentComponents/Bio";
import Provisions from "./contentComponents/Provisions";
import Skills from "./contentComponents/Skills";
import Projects from "./contentComponents/Projects";
import Contact from "./contentComponents/Contact";

function Content() {
  return (
    <div className="content">
      <About />
      <Provisions />
      <Bio />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default Content;
