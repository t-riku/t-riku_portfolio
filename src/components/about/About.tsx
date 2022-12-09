import React from "react";
import classes from "src/components/about/About.module.css";
import ME from "public/assets/me/IMG_1304.png";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
import Image from "next/image";
import MeModal from "../modal/MeModal";

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
              <small>2+ Years Studying</small>
            </article>
            <article className={classes.about__card}>
              <FiUsers className={classes.about__icon} />
              <h5>Clients</h5>
              <small>4+ clients</small>
            </article>
            <article className={classes.about__card}>
              <VscFolderLibrary className={classes.about__icon} />
              <h5>Projects</h5>
              <small>80+ Completed</small>
            </article>
          </div>

          <p>
            大学入学後、授業でHTML,CSS,JapaScriptなどのWebの基礎を学ぶ。
            大学2年生の4月に親戚の法務事務所のWebサイトを制作し初めて世の中に自身の制作物を公開した。
            大学2年生の終わり、3月に親の建築事務所のWebサイトを制作し公開。
            大学3年生では改めてリデザインをしReactを用いて制作した。
            近頃はWebサイトだけでなくNext
            JSとTypescriptを用いてアプリケーション開発をしている。
          </p>

          <div className={classes.cta}>
            <MeModal />

            <a href="#contact" className="btn btn-primary">
              Let&apos;s Contact
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
