import React from "react";
import classes from "src/pages/components/experience/Experience.module.css";
import { BsPatchCheckFill } from "react-icons/bs";

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className={`container ${classes.experience__container}`}>
        <div className={classes.experience__frontend}>
          <h3>Frontend Development</h3>
          <div className={classes.experience__content}>
            <article className={classes.experience__details}>
              <BsPatchCheckFill className={classes.experience__details__icon} />
              <div>
                <h4>HTMl</h4>
                <small>Experienced</small>
              </div>
            </article>
            <article className={classes.experience__details}>
              <BsPatchCheckFill className={classes.experience__details__icon} />
              <div>
                <h4>CSS</h4>
                <small>Experienced</small>
              </div>
            </article>
            <article className={classes.experience__details}>
              <BsPatchCheckFill className={classes.experience__details__icon} />
              <div>
                <h4>JavaScript</h4>
                <small>Experienced</small>
              </div>
            </article>
            <article className={classes.experience__details}>
              <BsPatchCheckFill className={classes.experience__details__icon} />
              <div>
                <h4>Bootstrap</h4>
                <small>Experienced</small>
              </div>
            </article>
            <article className={classes.experience__details}>
              <BsPatchCheckFill className={classes.experience__details__icon} />
              <div>
                <h4>Tailwind</h4>
                <small>Experienced</small>
              </div>
            </article>
            <article className={classes.experience__details}>
              <BsPatchCheckFill className={classes.experience__details__icon} />
              <div>
                <h4>React</h4>
                <small>Experienced</small>
              </div>
            </article>
          </div>
        </div>
        <div className={classes.experience__backend}>
          <h3>Backend Development</h3>
          <div className={classes.experience__content}>
            <article className={classes.experience__details}>
              <BsPatchCheckFill className={classes.experience__details__icon} />
              <div>
                <h4>Node JS</h4>
                <small>Experienced</small>
              </div>
            </article>
            <article className={classes.experience__details}>
              <BsPatchCheckFill className={classes.experience__details__icon} />
              <div>
                <h4>MongoDB</h4>
                <small>Experienced</small>
              </div>
            </article>
            <article className={classes.experience__details}>
              <BsPatchCheckFill className={classes.experience__details__icon} />
              <div>
                <h4>PHP</h4>
                <small>Experienced</small>
              </div>
            </article>
            <article className={classes.experience__details}>
              <BsPatchCheckFill className={classes.experience__details__icon} />
              <div>
                <h4>MySQL</h4>
                <small>Experienced</small>
              </div>
            </article>
            <article className={classes.experience__details}>
              <BsPatchCheckFill className={classes.experience__details__icon} />
              <div>
                <h4>Python</h4>
                <small>Experienced</small>
              </div>
            </article>
          </div>
        </div>
        <div className={classes.experience__others}>
          <h3>Backend Development</h3>
          <div className={classes.experience__content}>
            <article className={classes.experience__details}>
              <BsPatchCheckFill className={classes.experience__details__icon} />
              <div>
                <h4>Github</h4>
                <small>Experienced</small>
              </div>
            </article>
            <article className={classes.experience__details}>
              <BsPatchCheckFill className={classes.experience__details__icon} />
              <div>
                <h4>Illustrator</h4>
                <small>Experienced</small>
              </div>
            </article>
            <article className={classes.experience__details}>
              <BsPatchCheckFill className={classes.experience__details__icon} />
              <div>
                <h4>Photoshop </h4>
                <small>Experienced</small>
              </div>
            </article>
            <article className={classes.experience__details}>
              <BsPatchCheckFill className={classes.experience__details__icon} />
              <div>
                <h4>Figma</h4>
                <small>Experienced</small>
              </div>
            </article>
            <article className={classes.experience__details}>
              <BsPatchCheckFill className={classes.experience__details__icon} />
              <div>
                <h4>Slack</h4>
                <small>Experienced</small>
              </div>
            </article>
            <article className={classes.experience__details}>
              <BsPatchCheckFill className={classes.experience__details__icon} />
              <div>
                <h4>UI/UX</h4>
                <small>Experienced</small>
              </div>
            </article>
            <article className={classes.experience__details}>
              <BsPatchCheckFill className={classes.experience__details__icon} />
              <div>
                <h4>Slack</h4>
                <small>Experienced</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
