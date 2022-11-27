import React from "react";
import classes from "./Header.module.css";

const CTA = () => {
  return (
    <div className={classes.cta}>
      <a href="#portfolio" className="btn">
        Go Portfolio
      </a>
      <a href="#contact" className="btn btn-primary">
        Contact Me
      </a>
    </div>
  );
};

export default CTA;
