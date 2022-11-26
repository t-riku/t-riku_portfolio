import React from "react";
import classes from "./About.module.css";
import ME from "../../../public/assets/taka.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
import Image from "next/image";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className={`container ${classes.about__container}`}>
        <div className={classes.about__me}>
          <div className={classes.about__me__image}>
            <Image
              src={ME}
              width={413}
              height={413}
              // layout="responsive"
              alt="My Image"
            />
          </div>
        </div>

        <div className={classes.about__content}>
          <div className={classes.about__cards}>
            <article className={classes.about__card}>
              <FaAward className={classes.about__icon} />
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </article>
            <article className={classes.about__card}>
              <FiUsers className={classes.about__icon} />
              <h5>Clients</h5>
              <small>200+ Worldwide</small>
            </article>
            <article className={classes.about__card}>
              <VscFolderLibrary className={classes.about__icon} />
              <h5>Projects</h5>
              <small>80+ Completed</small>
            </article>
          </div>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
            corrupti quia molestias quaerat repellendus? Nam doloremque unde
            voluptas molestiae alias iure in architecto nostrum, eveniet tempora
            possimus ab. Omnis, iusto.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let&apos;s Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
