import React from "react";
import classes from "src/components/process/Process.module.css";
import Image from "next/image";
import processData from "src/Data/process/ProcessData";

const Process = () => {
  return (
    <section id="process">
      <h5>Process</h5>
      <h2>My Process</h2>

      <div className={`container ${classes.contact__container}`}>
        <ul className={classes.timeline}>
          {processData.map(({ id, image, time, title, text }, index) => {
            return (
              <li
                key={id}
                className={index % 2 === 0 ? "" : classes.timeline__inverted}
              >
                <div className={classes.timeline__image}>
                  <Image
                    className={`${classes.rounded__circle} ${classes.img__fluid}`}
                    src={image}
                    width={200}
                    height={200}
                    alt="process__image"
                  />
                </div>
                <div className={classes.timeline__panel}>
                  <div className={classes.timeline__heading}>
                    <h4 className={classes.time}>{time}</h4>
                    <h4 className={classes.subheading}>{title}</h4>
                  </div>
                  <div className={classes.timeline__body}>
                    <p className={classes.text__muted}>{text}</p>
                  </div>
                </div>
              </li>
            );
          })}
          <li className={classes.timeline__inverted}>
            <div className={classes.timeline__image}>
              <h4>
                Until
                <br />
                <br />
                now!!
              </h4>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Process;
