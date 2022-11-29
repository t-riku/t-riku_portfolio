import Image from "next/image";
import React from "react";
import classes from "src/pages/components/work/Work.module.css";
import { FaGithub } from "react-icons/fa";

const WorksItems = ({ item }: { item: any }) => {
  return (
    <div className={classes.work__card} key={item.id}>
      <div className={classes.work__img}>
        <Image src={item.image} width={313} height={313} alt={item.title} />
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

export default WorksItems;
