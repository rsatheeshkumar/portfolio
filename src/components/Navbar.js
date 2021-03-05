import React from "react";
import { Link } from "react-scroll";

import "./navbar.scss";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
      <div className="container-fluid">
        <img
          className="logo"
          src="https://avatars.githubusercontent.com/u/57618965?s=400&u=1b60d033d3035a264e6ceacb84a800f7e06a9fb0&v=4"
          alt="my img"
        />

        <Link
          className="name navbar-brand mx-2"
          to="header"
          spy={true}
          smooth={true}
          duration={500}
        >
          Satheeshkumar
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item active">
              <Link
                className="nav-link"
                to="header"
                spy={true}
                smooth={true}
                duration={500}
              >
                Home
              </Link>
            </li>
            <li className="nav-item active">
              <Link
                className="nav-link"
                to="about"
                spy={true}
                smooth={true}
                duration={500}
              >
                About
              </Link>
            </li>
            <li className="nav-item active">
              <Link
                className="nav-link"
                to="project"
                spy={true}
                smooth={true}
                duration={500}
              >
                Project
              </Link>
            </li>
            <li className="nav-item active">
              <Link
                className="nav-link"
                to="contact"
                spy={true}
                smooth={true}
                duration={500}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
