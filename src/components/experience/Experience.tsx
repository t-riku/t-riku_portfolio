import React from "react";
import classes from "src/components/experience/Experience.module.css";
import { BsPatchCheckFill } from "react-icons/bs";
import ExperienceItems from "./ExperienceItems";
import FrontendData from "../../Data/experience/FrontendData";
import BackendData from "../../Data/experience/BackendData";
import OthersData from "../../Data/experience/OthersData";

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className={`container ${classes.experience__container}`}>
        {/* ==========Frontend========= */}
        <div className={classes.experience__frontend}>
          <h3>Frontend Development</h3>
          <div className={classes.experience__content}>
            {FrontendData.map((item) => {
              return <ExperienceItems item={item} key={item.id} />;
            })}
          </div>
        </div>

        {/* ==========Backend========= */}
        <div className={classes.experience__backend}>
          <h3>Backend Development</h3>
          <div className={classes.experience__content}>
            {BackendData.map((item) => {
              return <ExperienceItems item={item} key={item.id} />;
            })}
          </div>
        </div>

        {/* ==========Others========= */}
        <div className={classes.experience__others}>
          <h3>Others</h3>
          <div className={classes.experience__content}>
            {OthersData.map((item) => {
              return <ExperienceItems item={item} key={item.id} />;
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
