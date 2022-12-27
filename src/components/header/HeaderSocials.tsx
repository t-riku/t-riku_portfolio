import React from "react";
import classes from "src/components/header/Header.module.css";
import { FaGithub, FaSchool } from "react-icons/fa";
import { MdOutlineStickyNote2 } from "react-icons/md";

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
        href="https://note.com/note_tdrk1013"
        target="_blank"
        rel="noreferrer noopener"
      >
        <MdOutlineStickyNote2 />
      </a>
    </div>
  );
};

export default HeaderSocials;
