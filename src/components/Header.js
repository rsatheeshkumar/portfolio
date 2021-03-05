import React from "react";
import About from "./About";
import Contact from "./Contact";
import Projects from "./Projects";

import "./header.scss";

const Header = () => {
  return (
    <React.Fragment>
      <div id="header" className="header-wrapper">
        <div className="container">
          <div className="info card text-center position-absolute top-50 start-50 translate-middle">
            <h1 className="card-header">Portfolio</h1>
            <p className="card-text">
              I'm passionate introvert who loves building software. I started
              learning with udemy courses these experiences I've the opportunity
              to create memorable products.
            </p>
          </div>
        </div>
      </div>
      <About />
      <Projects />
      <Contact />
    </React.Fragment>
  );
};

export default Header;
