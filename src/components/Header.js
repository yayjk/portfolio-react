import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

function Header() {
  return (
    <div className="header">
      <nav>
        <AnchorLink className="navigate-links" href="#about">
          About
        </AnchorLink>
        <AnchorLink className="navigate-links" href="#provisions">
          Provisions
        </AnchorLink>
        <AnchorLink className="navigate-links" href="#bio">
          Bio
        </AnchorLink>
        <AnchorLink className="navigate-links" href="#contact">
          Contact
        </AnchorLink>
      </nav>
    </div>
  );
}

export default Header;
