import React from "react";
import classes from "src/pages/components/nav/Nav.module.css";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { BiMessageSquareDetail } from "react-icons/bi";
import { useState } from "react";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");

  return (
    <nav className={classes.nav}>
      <a
        href="#header"
        onClick={() => setActiveNav("#header")}
        // className={activeNav === "#" ? "active" : ""}
        className={activeNav === "#header" ? classes.active : ""}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav("#about")}
        className={activeNav === "#about" ? classes.active : ""}
      >
        <AiOutlineUser />
      </a>
      <a
        href="#work"
        onClick={() => setActiveNav("#work")}
        className={activeNav === "#work" ? classes.active : ""}
      >
        <BiBook />
      </a>
      <a
        href="#services"
        onClick={() => setActiveNav("#services")}
        className={activeNav === "#services" ? "active" : ""}
      >
        <RiServiceLine />
      </a>
      <a
        href="#contact"
        onClick={() => setActiveNav("#contact")}
        className={activeNav === "#contact" ? classes.active : ""}
      >
        <BiMessageSquareDetail />
      </a>
    </nav>
  );
};

export default Nav;
