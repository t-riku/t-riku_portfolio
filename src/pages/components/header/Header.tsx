import React from "react";
import classes from "src/pages/components/header/Header.module.css";
// import CTA from "src/pages/components/header/CTA";
import ME from "public/assets/me.png";
import Image from "next/image";
import CTA from "./CTA";
import HeaderSocials from "./HeaderSocials";
// import HeaderSocials from "src/pages/components/header/HeaderSocials";

const Header = () => {
  return (
    <header className={classes.header}>
      <div className={`container ${classes.header__container}`}>
        <h5>Hello I&apos;m</h5>
        <h1>Riku Tada</h1>
        <h5 className="text-lignt">DHU Student</h5>

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
