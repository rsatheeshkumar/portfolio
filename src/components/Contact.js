import React from "react";
import {
  AiFillLinkedin,
  AiFillFacebook,
  AiOutlineInstagram,
  AiFillTwitterSquare,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import "./contact.scss";

const Contact = () => {
  return (
    <div id="contact" className="contact p-4">
      <h1>Contact details</h1>
      <div className="container">
        <div className="col mt-5">
          <div className="contact-details d-flex flex-row justify-content-around">
            <ul className="contact-details-name d-flex flex-column justify-content-around flex-wrap">
              <li>Satheesh kumar R</li>
              <li>rsatheeshkumar2894@gmail.com</li>
              <li>+91 9344991925</li>
              <li>+91 9629875433</li>
            </ul>
            <hr />
            <div className="social-media">
              <ul className="d-flex flex-row justify-content-around align-items-center mt-5 flex-wrap">
                <Link
                  to="//www.linkedin.com/in/satheesh-kumar-r-53a82112b/"
                  target="_blank"
                >
                  <AiFillLinkedin size="50" color="#0077b5" />
                </Link>
                <Link
                  to="//www.facebook.com/profile.php?id=100003817565129"
                  target="_blank"
                >
                  <AiFillFacebook size="50" color="#4867aa" />
                </Link>
                <Link to="//www.instagram.com/satz._.satheesh/" target="_blank">
                  <AiOutlineInstagram size="50" color="#a6379e" />
                </Link>
                <Link to="//www.twitter.com/Satheesh2894" target="_blank">
                  <AiFillTwitterSquare size="50" color="#00a2f3" />
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
