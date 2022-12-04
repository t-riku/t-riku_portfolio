import Image from "next/image";
import React from "react";
import classes from "src/pages/components/work/Work.module.css";
import { FaGithub } from "react-icons/fa";

type ITEM = {
  id: number;
  image: Image;
  title: string;
  github: string;
  demo: string;
  category: string;
};

type Image = {
  blurDataURL: string;
  blurHeight: number;
  blurWidth: number;
  height: number;
  src: string;
  width: number;
};

const WorkItems = ({ item }: { item: ITEM }) => {
  console.log(item);
  return (
    <div className={classes.work__card} key={item.id}>
      <div className={classes.work__img}>
        <Image src={item.image.src} width={313} height={313} alt={item.title} />
      </div>

      <h3 className={classes.work__title}>{item.title}</h3>
      <div className={classes.work__cta}>
        {/* modalwindowにする */}
        <a
          href={item.github}
          className="btn"
          target="_blank"
          rel="noreferrer noopener"
        >
          More
        </a>
        <a
          href={item.demo}
          className="btn btn-primary"
          target="_blank"
          rel="noreferrer noopener"
        >
          Live Demo
        </a>
        <a
          href={item.github}
          className={classes.work__github}
          target="_blank"
          rel="noreferrer noopener"
        >
          <FaGithub />
        </a>
      </div>
    </div>
  );
};

export default WorkItems;
