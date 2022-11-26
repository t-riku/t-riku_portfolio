import React from "react";
import classes from "./Header.module.css";
import CTA from "./CTA";
import ME from "../../../public/assets/me.png";
import Image from "next/image";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <header className={classes.header}>
      <div className={`${classes.container} ${classes.header__container}`}>
        <h5>Hello I&apos;m</h5>
        <h1>Riku Tada</h1>
        <h5 className="text-lignt">DHU Student</h5>

        <CTA />

        <HeaderSocials />

        <div className={classes.me}>
          <Image src={ME} width={500} height={300} alt="My Image" />
        </div>

        <a href="#contact" className={classes.scroll__down}>
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
