import React from "react";
import classes from "src/components/footer/Footer.module.css";
import { FaFacebookF, FaGithub } from "react-icons/fa";
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
          <a href="#work">PORTFOLIO</a>
        </li>
        <li>
          <a href="#experience">EXPERIENCE</a>
        </li>
        <li>
          <a href="#process">PROCESS</a>
        </li>
        <li>
          <a href="#contact">CONTACT</a>
        </li>
      </ul>

      <div className={classes.footer__socials}>
        <a
          href="https://www.facebook.com/dinga.riku"
          target="_blank"
          rel="noreferrer noopener"
        >
          <FaFacebookF />
        </a>
        <a
          href="https://www.instagram.com/t.riku_1013/?hl=ja"
          target="_blank"
          rel="noreferrer noopener"
        >
          <FiInstagram />
        </a>
        <a
          href="https://twitter.com/Rikudinga1013"
          target="_blank"
          rel="noreferrer noopener"
        >
          <IoLogoTwitter />
        </a>
        <a
          href="https://github.com/t-riku"
          target="_blank"
          rel="noreferrer noopener"
        >
          <FaGithub />
        </a>
      </div>

      <div className={classes.footer__copyright}>
        <small>&copy; t-riku Portfolio Site. All Right Reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
