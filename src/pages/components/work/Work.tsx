import React from "react";
import classes from "src/pages/components/work/Work.module.css";
import Works from "./Works";

const Work = () => {
  return (
    <section id="work">
      <h5>work</h5>
      <h2>My Portfolio</h2>
      {/* <div className={`container ${classes.work__container}`}>
        <Works />
      </div> */}
      <div className="container">
        <Works />
      </div>
    </section>
  );
};

export default Work;
