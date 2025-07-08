import React from "react";
import "./Contact.css";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

const Contact = () => {
  return (
    <div id="contact" className="container-box contact">
      <div className="container d-flex flex-column justify-content-center align-items-center gap-4">
        <div className="text d-flex flex-column justify-content-center align-items-center gap-3">
          <h1>Get In Touch</h1>
          <p>
            Have a project in mind? Let's work together to bring your ideas to
            life!
          </p>
          <div className="icons d-flex justify-content-center align-items-center gap-5">
            <div className="email d-flex align-items-center gap-2">
              <a href="#">
                <FaEnvelope className="icon" />
              </a>
              <span>john.doe@email.com</span>
            </div>
            <div className="number  d-flex align-items-center gap-2">
              <a href="#">
                <FaPhone className="icon" />
              </a>
              <span>+123 456 7890</span>
            </div>
            <div className="address d-flex align-items-center gap-2">
              <a href="#">
                <FaMapMarkerAlt className="icon" />
              </a>
              <span>123 Main Street, City, Country</span>
            </div>
          </div>
        </div>
        <div className="icons d-flex justify-content-center align-items-center gap-5">
          <a href="https://github.com/bhagya-grow" target="_blank">
            <FaGithub className="icon icons-hover" />
          </a>
          <a target="_blank" href="https://www.linkedin.com/in/bhagyadutta-das-9b8886341?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
            <FaLinkedin className="icon icons-hover " />
          </a>
          <a href="#">
            <FaTwitter className="icon icons-hover" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
