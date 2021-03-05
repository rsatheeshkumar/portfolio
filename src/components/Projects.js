import React from "react";
import { Link } from "react-router-dom";
import "./projects.scss";
const Projects = () => {
  return (
    <div id="project" className="project">
      <h1>Projects</h1>
      <div className="container">
        <div className="row row-cols-1 row-cols-sm-3 row-cols-md-3 g-3 mt-4">
          <div className="col">
            <div className="card shadow-sm">
              <img
                src={require("./images/crownclothing.png").default}
                alt="projectImg"
                className="img project-image w-100"
              />
              <div className="card-body">
                <h1 className="card-title">Crown-Clothing</h1>
                <p className="card-text">
                  e-commerce app for shopping in local shop, It lead the react
                  project by making good architecture Master React Design
                  Patterns and Routing with React Router User authenticating by
                  firebase.Framework used (React,Redux,scss and firebase)
                </p>
                <div className="d-flex justify-content-around align-items-center">
                  <Link
                    to="//github.com/rsatheeshkumar/Crown-Clothing-master"
                    target="_blank"
                    className="btn btn-sm btn-outline-info"
                  >
                    Github
                  </Link>
                  <Link
                    to="//rsatheeshkumar-clothing.netlify.app/"
                    target="_blank"
                    className="btn btn-sm btn-outline-info"
                  >
                    View Project
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card shadow-sm">
              <img
                src={require("./images/lyricsfinder.png").default}
                alt="projectImg"
                className="img project-image w-100"
              />
              <div className="card-body">
                <h1 className="card-title">Lyrics-finder</h1>
                <p className="card-text">
                  Lyrics searching app for find lyrics of our favorite
                  songs,fetching data from rest api from cors origin and learned
                  how to do search filter from api and Routing with React
                  Router.Framework used (React,redux,music-match API,bootstrap
                  and scss)
                </p>
                <div className="d-flex justify-content-around align-items-center">
                  <Link
                    to="//github.com/rsatheeshkumar/lyrics-search"
                    target="_blank"
                    className="btn btn-sm btn-outline-info"
                  >
                    Github
                  </Link>
                  <Link
                    to="//rsatheeshkumar-lyrics-finder.netlify.app/"
                    target="_blank"
                    className="btn btn-sm btn-outline-info"
                  >
                    View Project
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card shadow-sm">
              <img
                src={require("./images/github.png").default}
                alt="projectImg"
                className="img project-image w-100"
              />
              <div className="card-body">
                <h1 className="card-title">Github</h1>
                <p className="card-text">
                  Github app for getting github users and access there
                  repository and we can able to clone there repo using there SSH
                  key by copy there key and Routing with React Router. Framework
                  used (React,redux,github API,bootstrap and scss)
                </p>
                <div className="d-flex justify-content-around align-items-center">
                  <Link
                    to="//github.com/rsatheeshkumar/github"
                    target="_blank"
                    className="btn btn-sm btn-outline-info"
                  >
                    Github
                  </Link>
                  <Link
                    to="//rsatheeshkumar-github.netlify.app/"
                    target="_blank"
                    className="btn btn-sm btn-outline-info"
                  >
                    View Project
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card shadow-sm">
              <img
                src={require("./images/expense.png").default}
                alt="projectImg"
                className="img project-image w-100"
              />
              <div className="card-body">
                <h1 className="card-title">Expense</h1>
                <p className="card-text">
                  Expense tracker to calculate our income and expense data.using
                  context to mange the state . Framework used ( React,hooks and
                  scss )
                </p>
                <div className="d-flex justify-content-around align-items-center">
                  <Link
                    to="//github.com/rsatheeshkumar/expenses"
                    target="_blank"
                    className="btn btn-sm btn-outline-info"
                  >
                    Github
                  </Link>
                  <Link
                    to="//rsatheeshkumar-expense.netlify.app/"
                    target="_blank"
                    className="btn btn-sm btn-outline-info"
                  >
                    View Project
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card shadow-sm">
              <img
                src={require("./images/natours.png").default}
                alt="projectImg"
                className="img project-image w-100"
              />
              <div className="card-body">
                <h1 className="card-title">Tour-Booking</h1>
                <p className="card-text">
                  Tour package booking app. Used complex CSS animations,
                  advanced responsive design techniques, flex-box layouts, Sass,
                  CSS architecture, fundamental CSS concepts.
                </p>
                <div className="d-flex justify-content-around align-items-center">
                  <Link
                    to="//github.com/rsatheeshkumar/natours-1"
                    target="_blank"
                    className="btn btn-sm btn-outline-info"
                  >
                    Github
                  </Link>
                  <Link
                    to="//rsatheeshkumar-natours.netlify.app/"
                    target="_blank"
                    className="btn btn-sm btn-outline-info"
                  >
                    View Project
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card shadow-sm">
              <img
                src={require("./images/piggame.png").default}
                alt="projectImg"
                className="img project-image w-100"
              />
              <div className="card-body">
                <h1 className="card-title">Pig-Game</h1>
                <p className="card-text">
                  Learned DOM access and manipulation Fundamentals, DOM and
                  Event handling ES6 modules Async JS Scoping, Coercion,
                  Functions, HOC Functions, Closure, Event-loop, Promise, Class.
                </p>
                <div className="d-flex justify-content-around align-items-center">
                  <Link
                    to="//github.com/rsatheeshkumar/pig-game"
                    target="_blank"
                    className="btn btn-sm btn-outline-info"
                  >
                    Github
                  </Link>
                  <Link
                    to="//rsatheeshkumar-pig-game.netlify.app"
                    target="_blank"
                    className="btn btn-sm btn-outline-info"
                  >
                    View Project
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card shadow-sm">
              <img
                src={require("./images/netflix.png").default}
                alt="projectImg"
                className="img project-image w-100"
              />
              <div className="card-body">
                <h1 className="card-title">Netflix</h1>
                <p className="card-text">
                  Netflix landing page. Used complex CSS animations, advanced
                  responsive design techniques, flex-box layouts, Sass, CSS
                  architecture, fundamental CSS concepts and react
                </p>
                <div className="d-flex justify-content-around align-items-center">
                  <Link
                    to="//github.com/rsatheeshkumar/netflix"
                    target="_blank"
                    className="btn btn-sm btn-outline-info"
                  >
                    Github
                  </Link>
                  <Link
                    to="//rsatheeshkumar-netflix.netlify.app"
                    target="_blank"
                    className="btn btn-sm btn-outline-info"
                  >
                    View Project
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card shadow-sm">
              <img
                src={require("./images/instagram.png").default}
                alt="projectImg"
                className="img project-image w-100"
              />
              <div className="card-body">
                <h1 className="card-title">Instagram</h1>
                <p className="card-text">
                  Instagram app for social media users and created backend for
                  users using air-tables users can able to upload there posts
                  and comments . Framework used
                  (React,redux,Air-tables,bootstrap and scss)
                </p>
                <div className="d-flex justify-content-around align-items-center">
                  <Link
                    to="//github.com/rsatheeshkumar/instagram"
                    target="_blank"
                    className="btn btn-sm btn-outline-info"
                  >
                    Github
                  </Link>
                  <Link
                    to="//rsatheeshkumar-instagram.netlify.app"
                    target="_blank"
                    className="btn btn-sm btn-outline-info"
                  >
                    View Project
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card shadow-sm">
              <img
                src={require("./images/socialchats.png").default}
                alt="projectImg"
                className="img project-image w-100"
              />
              <div className="card-body">
                <h1 className="card-title">Social-Chats</h1>
                <p className="card-text">
                  Social chats is all in one app users can view there social
                  network in single app. I learned the component architecture
                  and how to manage state. Framework used(React,bootstrap and
                  react-icons)
                </p>
                <div className="d-flex justify-content-around align-items-center">
                  <Link
                    to="//github.com/rsatheeshkumar/chat-task"
                    target="_blank"
                    className="btn btn-sm btn-outline-info"
                  >
                    Github
                  </Link>
                  <Link
                    to="//rsatheeshkumar-social-chats.netlify.app"
                    target="_blank"
                    className="btn btn-sm btn-outline-info"
                  >
                    View Project
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card shadow-sm">
              <img
                src={require("./images/todo.png").default}
                alt="projectImg"
                className="img project-image w-100"
              />
              <div className="card-body">
                <h1 className="card-title">Todo</h1>
                <p className="card-text">
                  todo to store the user plan here i learned how to create
                  update and delete the stored data and redux state management
                  Framework used (react and redux )
                </p>
                <div className="d-flex justify-content-around align-items-center">
                  <Link
                    to="//github.com/rsatheeshkumar/todos-redux-hooks"
                    target="_blank"
                    className="btn btn-sm btn-outline-info"
                  >
                    Github
                  </Link>
                  <Link
                    to="//rsatheeshkumar-todos.netlify.app"
                    target="_blank"
                    className="btn btn-sm btn-outline-info"
                  >
                    View Project
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card shadow-sm">
              <img
                src={require("./images/forkifyfood.png").default}
                alt="projectImg"
                className="img project-image w-100"
              />
              <div className="card-body">
                <h1 className="card-title">Food-Order</h1>
                <p className="card-text">
                  Customers can view the menu based on their taste Used arrow
                  functions, first-class, higher-order functions and bind
                  Asynchronous JavaScript the event loop, promises, async/await,
                  and error handling access data from third-party APIs with AJAX
                  calls.
                </p>
                <div className="d-flex justify-content-around align-items-center">
                  <Link
                    to="//github.com/rsatheeshkumar/forkify"
                    target="_blank"
                    className="btn btn-sm btn-outline-info"
                  >
                    Github
                  </Link>
                  <Link
                    to="//rsatheeshkumar-forkify.netlify.app"
                    target="_blank"
                    className="btn btn-sm btn-outline-info"
                  >
                    View Project
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card shadow-sm">
              <img
                src={require("./images/search-monster.png").default}
                alt="projectImg"
                className="img project-image w-100 h-25"
              />
              <div className="card-body">
                <h1 className="card-title">Search-Monsters</h1>
                <p className="card-text">
                  It helps me to understand react and fetch Json placeholder API
                  and render list and filter the monsters on users input
                </p>
                <div className="d-flex justify-content-around align-items-center">
                  <Link
                    to="//codesandbox.io/s/inspiring-bird-9jbid"
                    target="_blank"
                    className="btn btn-sm btn-outline-info"
                  >
                    Github
                  </Link>
                  <Link
                    to="//rsatheeshkumar-monsterapp.netlify.app"
                    target="_blank"
                    className="btn btn-sm btn-outline-info"
                  >
                    View Project
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
