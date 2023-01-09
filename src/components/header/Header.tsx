import React from "react";
import classes from "src/components/header/Header.module.css";
import ME from "public/assets/me/me.png";
import Image from "next/image";
import CTA from "./CTA";
import HeaderSocials from "./HeaderSocials";
import Switch from "src/components/header/Switch";

const Header = () => {
  return (
    <header className={classes.header} id="header">
      <div className={`container ${classes.header__container}`}>
        <h5>Hello I&apos;m</h5>
        <h1>Riku Tada</h1>
        <h5>DHU Student</h5>

        <Switch />

        <CTA />

        <HeaderSocials />

        <div className={classes.me}>
          <Image src={ME} width={500} height={300} alt="My Image" />
        </div>

        <div className={classes.scrolldown4}>
          <span>Scroll</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
