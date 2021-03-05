import React from "react";
import "./about.scss";

const About = () => {
  return (
    <div id="about" className="about">
      <h1>About</h1>
      <div className="container">
        <div className="clearfix text-start">
          <img
            src="https://avatars.githubusercontent.com/u/57618965?s=400&u=1b60d033d3035a264e6ceacb84a800f7e06a9fb0&v=4"
            className="col-md-6 float-md-end mb-3 ms-md-3 img-fluid rounded-circle w-25"
            alt="..."
          />
          <div>
            <p>
              I have build more than ten successful projects which to written in
              code that is maintainable and easy to understand.
            </p>
            <h5>Build Responsive Real World Websites with HTML5 and CSS3</h5>
            <p>Platform: Udemy </p>
            <li>
              Learned: Html & CSS Web design basics & Responsive websites.
            </li>
            <hr />
            <h5>Advanced CSS and Sass: Flexbox, Grid, Animations and More!</h5>
            <p>Platform: Udemy </p>
            <li>Learned: Modern CSS Techniques and Animations Table</li>
            <li>Flex-box and Grid Layout system Sass & BEM architecture.</li>
            <hr />
            <h5>JavaScript Basics</h5> <p>Platform: Ultimate Course</p>
            <li>
              Learned: JavaScript fundamentals: variables, conditionals,
              operators, boolean logic, functions, arrays, objects, loops
            </li>
            <li>
              strings Modern OOP: Classes, constructors and prototypal
              inheritance.
            </li>
            <hr />
            <h5>Complete React Developer in 2021 (w/ Redux, Hooks, GraphQL)</h5>
            <p>Platform: Udemy</p>
            <li>
              Learned: React JS Basics and Hooks State, Props, Conditional
            </li>
            <li>List, Forms, Events, Routes Firebase API integration</li>
            <li>
              user authentication Redux - Store, actions, redux, selectors,
              persister.
            </li>
            <hr />
            <h5>The Complete JavaScript Course 2020: From Zero to Expert!</h5>
            <p>Platform: Udemy</p>
            <li>
              Learned: Fundamentals, DOM Operations and Event handling Object
              oriented Programming ES6 modules
            </li>
            <li>
              Asynchronous JavaScript Scoping, Coercion, Functions, Higher Order
              Functions, Closure, Event-loop, Promise, Class, Prototype.
            </li>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
