import React, { useEffect, useState } from "react";
import classes from "src/components/work/Work.module.css";
import projectsData from "../../Data/work/ProjectsData";
import projectsNav from "../../Data/work/NavData";
import WorkItems, { ITEM } from "./WorkItems";

const Works = () => {
  const [item, setItem] = useState({ name: "all" });
  const [projects, setProjects] = useState([] as ITEM[]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (item.name === "all") {
      setProjects(projectsData);
    } else {
      const newProjects = projectsData.filter((project) => {
        return project.category.toLowerCase() === item.name;
      });
      setProjects(newProjects);
    }
  }, [item]);

  const handleClick = (e: any, index: any) => {
    setItem({ name: e.target.textContent.toLowerCase() });
    setActive(index);
  };

  return (
    <div>
      <div className={classes.work__filters}>
        {projectsNav.map((item, index) => {
          return (
            <span
              onClick={(e) => {
                handleClick(e, index);
              }}
              className={`${active === index ? classes.active__work : ""} ${
                classes.work__item
              }`}
              key={index}
            >
              {item.name}
            </span>
          );
        })}
      </div>

      <div className={classes.work__container}>
        {/* <div className={`container ${classes.work__container}`}> */}

        {projects.map((item) => {
          return <WorkItems item={item} key={item.id} />;
        })}
      </div>
    </div>
  );
};

export default Works;
