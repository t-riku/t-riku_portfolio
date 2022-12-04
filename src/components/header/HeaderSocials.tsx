import React from "react";
import classes from "src/components/header/Header.module.css";
import { FaGithub, FaSchool } from "react-icons/fa";
import { BsHouseFill } from "react-icons/bs";

const HeaderSocials = () => {
  return (
    <div className={classes.header__socials}>
      <a
        href="https://github.com/t-riku"
        target="_blank"
        rel="noreferrer noopener"
      >
        <FaGithub />
      </a>
      <a
        href="https://www.dhw.ac.jp/"
        target="_blank"
        rel="noreferrer noopener"
      >
        <FaSchool />
      </a>
      <a
        href="https://www.arttada.com/"
        target="_blank"
        rel="noreferrer noopener"
      >
        <BsHouseFill />
      </a>
    </div>
  );
};

export default HeaderSocials;
