import React from "react";
import ProvisionBox from "./ProvisionBox";

const provision1 = {
  title: "Responsive UI",
  description:
    "Web apps that work on any devices be it laptop, mobiles or even tablets"
};

const provision2 = {
  title: "Great Designs",
  description: "Visually appealing layouts that equals a better user experience"
};

const provision3 = {
  title: "Latest Frameworks",
  description:
    "Web apps that run on the latest frameworks like React.JS, Django."
};

const provision4 = {
  title: "Quick Response time",
  description: "Web apps that are optimized for super quick load times"
};

function Provisions() {
  return (
    <div className="provisions">
      <span className="provision-title">I aim to design:</span>
      <ProvisionBox provision={provision1} />
      <ProvisionBox provision={provision2} />
      <ProvisionBox provision={provision3} />
      <ProvisionBox provision={provision4} />
    </div>
  );
}

export default Provisions;
