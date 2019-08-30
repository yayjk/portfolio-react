import React from "react";
import "../styles/Content.css";

function Content() {
  return (
    <div className="content">
      <div className="about">
        <div className="pro_pic">My Mug</div>
        <div className="pro_summary">Brief about me</div>
      </div>
      <div className="provisions">
        <span>ONE</span>
        <span>TWO</span>
        <span>THREE</span>
        <span>FOUR</span>
      </div>
      <div className="bio">BIO</div>
      <div className="skills">
        <span>ONE</span>
        <span>TWO</span>
        <span>THREE</span>
        <span>FOUR</span>
      </div>
      <div className="project">PROJECT</div>
      <div className="contact">CONTACT</div>
    </div>
  );
}

export default Content;
