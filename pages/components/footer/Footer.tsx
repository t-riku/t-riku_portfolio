import React from "react";
import classes from "./footer.module.css";
import { FaFacebookF } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { IoLogoTwitter } from "react-icons/io";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <a href="#" className={classes.footer__logo}>
        t-riku Portfolio Site
      </a>

      <ul className={classes.permalinks}>
        <li>
          <a href="#">HOME</a>
        </li>
        <li>
          <a href="#about">ABOUT</a>
        </li>
        <li>
          <a href="#experience">EXPERIENCE</a>
        </li>
        <li>
          <a href="#services">SERVICES</a>
        </li>
        <li>
          <a href="#portfolio">PORTFOLIO</a>
        </li>
        <li>
          <a href="#testimonials">TESTIMONIALS</a>
        </li>
        <li>
          <a href="#contact">CONTACT</a>
        </li>
      </ul>

      <div className={classes.footer__socials}>
        <a href="https://facebook.com">
          <FaFacebookF />
        </a>
        <a href="https://inatagram.com">
          <FiInstagram />
        </a>
        <a href="https://twitter.com">
          <IoLogoTwitter />
        </a>
      </div>

      <div className={classes.footer__copyright}>
        <small>&copy; t-riku Portfolio Demo Site. All Right Reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
