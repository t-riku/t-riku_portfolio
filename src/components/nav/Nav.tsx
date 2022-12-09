import React from "react";
import classes from "src/components/nav/Nav.module.css";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { BiMessageSquareDetail } from "react-icons/bi";
import { GiHorizonRoad, GiSkills } from "react-icons/gi";

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
        href="#experience"
        onClick={() => setActiveNav("#experience")}
        className={activeNav === "#experience" ? classes.active : ""}
      >
        <GiSkills />
      </a>
      <a
        href="#process"
        onClick={() => setActiveNav("#process")}
        className={activeNav === "#process" ? classes.active : ""}
      >
        <GiHorizonRoad />
        {/* <GrNetwork /> */}
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
