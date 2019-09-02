import React from "react";

function ProvisionBox(props) {
  return (
    <div className="provision-box">
      <p>{props.provision.title}</p>
      <p>{props.provision.description}</p>
    </div>
  );
}

export default ProvisionBox;
