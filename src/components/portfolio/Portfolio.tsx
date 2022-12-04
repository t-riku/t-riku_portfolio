import React from "react";
import classes from "src/components/portfolio/Portfolio.module.css";
import IMG1 from "public/assets/portfolio/1.jpg";
import IMG2 from "public/assets/portfolio/2.jpg";
import IMG3 from "public/assets/portfolio/3.jpg";
import IMG4 from "public/assets/portfolio/4.jpg";
import IMG5 from "public/assets/portfolio/5.jpg";
import IMG6 from "public/assets/portfolio/6.jpg";
import Image from "next/image";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "ポートフォリオサイト",
    github: "https://github.com/t-riku/oneokrock_web",
    demo: "https://www.arttada.com/",
  },
  {
    id: 2,
    image: IMG2,
    title: "多田設計事務所（リメイク）",
    github: "https://github.com/t-riku/oneokrock_web",
    demo: "https://www.arttada.com/",
  },
  {
    id: 3,
    image: IMG3,
    title: "多田設計事務所",
    github: "https://github.com/t-riku/oneokrock_web",
    demo: "https://www.arttada.com/",
  },
  {
    id: 4,
    image: IMG4,
    title: "山下法務事務所",
    github: "https://github.com/t-riku/oneokrock_web",
    demo: "https://www.arttada.com/",
  },
  {
    id: 5,
    image: IMG5,
    title: "ONE OK ROCK Website",
    github: "https://github.com/t-riku/oneokrock_web",
    demo: "https://www.arttada.com/",
  },
  {
    id: 6,
    image: IMG6,
    title: "DHU Web（リメイク）",
    github: "https://github.com/t-riku/oneokrock_web",
    demo: "https://www.arttada.com/",
  },
  // {
  //   id: 7,
  //   image: IMG7,
  //   title: "天気アプリ",
  //   github: "https://github.com/t-riku/oneokrock_web",
  //   demo: "https://www.arttada.com/",
  // },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className={`container ${classes.portfolio__container}`}>
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className={classes.portfolio__item}>
              <div className={classes.portfolio__item_image}>
                <Image
                  src={image}
                  width={313}
                  height={313}
                  // layout="responsive"
                  alt={title}
                />
              </div>
              <h3>{title}</h3>
              <div className={classes.portfolio__item_cta}>
                {/* modalwindowにする */}
                <a
                  href={github}
                  className="btn"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  More
                </a>
                <a
                  href={demo}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Live Demo
                </a>
                {/* githubはアイコンにする */}
                {/* <a
                  href={github}
                  className="btn"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Github
                </a> */}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
