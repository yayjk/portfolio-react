/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import pro_pic from "../../assets/pro_pic.jpg";

function About() {
  return (
    <div className="about">
      <div className="pro_pic">
        <img src={pro_pic} />
      </div>
      <div className="pro_summary">
        Hi I am Jaskaran, a full-stack developer based in Bengaluru, IN.{" "}
      </div>
    </div>
  );
}

export default About;
