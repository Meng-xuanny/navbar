import React, { useState, useRef } from "react";
import { links, social } from "./data";
import { FaBars } from "react-icons/fa";
import logo from "./logo.svg";

const Navbar = () => {
  const [showlinks, setShowlinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  const linksStyle = {
    height: showlinks
      ? `${linksRef.current.getBoundingClientRect().height}px`
      : "0px",
  };

  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="logo" className="logo" />
          <button
            type="button"
            onClick={() => setShowlinks((prevLink) => !prevLink)}
            className="btn nav-toggle"
          >
            <FaBars />
          </button>
        </div>

        <div
          className="links-container"
          ref={linksContainerRef}
          style={linksStyle}
        >
          <ul className="links" ref={linksRef}>
            {links.map((link) => (
              <li key={link.id}>
                <a href={link.url}>{link.text}</a>
              </li>
            ))}
          </ul>
        </div>

        <ul className="social-icons">
          {social.map(({ id, url, icon }) => (
            <li key={id}>
              <a href={url}>{icon}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
