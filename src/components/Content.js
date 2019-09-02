import React from "react";
import About from "./contentComponents/About";
import Bio from "./contentComponents/Bio";
import Provisions from "./contentComponents/Provisions";
import Contact from "./contentComponents/Contact";

function Content() {
  return (
    <div className="content">
      <About />
      <Provisions />
      <Bio />
      <Contact />
    </div>
  );
}

export default Content;
