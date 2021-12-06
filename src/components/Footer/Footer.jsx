import React from "react";
import "./Footer.css";
import {
  FaGithub,
  FaTwitter,
  // FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
} from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return(
    <div className="footer">
      <h2>Join the community</h2>
      <div className="flex1">
        <button className="button1">Receive News</button>
        <button className="button2">Join Here</button>
      </div>
      <div className="flex2">
        <div>
          <h4>NAVIGATION</h4>
          <li>
            <Link to="#home">Enrollment</Link>
          </li>
          <li>
            <Link to="#about">Linkages</Link>
          </li>

          <li>
            <Link to="#home">What we do</Link>
          </li>
          <li>
            <Link to="#contact">Events</Link>
          </li>
          <li>
            <Link to="#contact">Learning</Link>
          </li>
        </div>

        <div>
          <h4>LEGAL</h4>
          <li>
            <Link to="#home">General info</Link>
          </li>
          <li>
            <Link to="#about">Terms of Use</Link>
          </li>
          <li>
            <Link to="#about">Privacy policy</Link>
          </li>
        </div>
        <div>
          <h4>TALK TO US</h4>
          <li>
            <Link to="#home">support@outbox.co.ug</Link>
          </li>
          <li>
            <Link to="#about">Facebook</Link>
          </li>
          <li>
            <Link to="#about">LinkedIn</Link>
          </li>
          <li>
            <Link to="#about">Twitter</Link>
          </li>
        </div>
      </div>
      <div className="copysection">
        <Link to="/" className="logo">
            <img src="/Images/outbox.png"
              alt="logo"
              width={100}
              height={45}
            />
        </Link>
        <div>
          <p style={{ fontSize: "1rem" }}>
            © 2021 OutBox EDU. All Rights Reserved.{" "}
          </p>
        </div>
        <div className="social">
          <Link to="https://facebook.com/OutboxEdu">
            <FaFacebookF />
          </Link>
          <Link to="https://linkedin.com/company/outboxuganda/">
            <FaLinkedinIn />
          </Link>
          <Link to="https://twitter.com/EduOutbox">
            <FaTwitter />
          </Link>
          <Link to="#">
            <FaGithub />
          </Link>
        </div>
      </div>
    </div>
  );
}
export default Footer;
