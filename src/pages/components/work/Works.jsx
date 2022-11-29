import React, { useEffect, useState } from "react";
import classes from "src/pages/components/work/Work.module.css";
// import { projectsData } from "./Data";
// import { projectsNav } from "./Data";
import WorkItems from "./WorkItems";
import Work1 from "public/assets/portfolio/work1.jpg";
import Work2 from "public/assets/portfolio/work2.jpg";
import Work3 from "public/assets/portfolio/work3.jpg";
import Work4 from "public/assets/portfolio/work4.jpg";
import Work5 from "public/assets/portfolio/work5.jpg";
import Work6 from "public/assets/portfolio/6.jpg";

const Works = () => {
  const [item, setItem] = useState({ name: "all" });
  const [projects, setProjects] = useState([]);
  const [active, setActive] = useState(0);

  // ========== PORTFOLIO DATA ==========

  const projectsData = [
    {
      id: 1,
      image: Work1,
      title: "ポートフォリオサイト",
      github: "https://github.com/t-riku/oneokrock_web",
      demo: "https://www.arttada.com/",
      category: "web",
    },
    {
      id: 2,
      image: Work2,
      title: "多田設計事務所（リメイク）",
      github: "https://github.com/t-riku/oneokrock_web",
      demo: "https://www.arttada.com/",
      category: "app",
    },
    {
      id: 3,
      image: Work3,
      title: "多田設計事務所",
      github: "https://github.com/t-riku/oneokrock_web",
      demo: "https://www.arttada.com/",
      category: "design",
    },
    {
      id: 4,
      image: Work4,
      title: "山下法務事務所",
      github: "https://github.com/t-riku/oneokrock_web",
      demo: "https://www.arttada.com/",
      category: "app",
    },
    {
      id: 5,
      image: Work5,
      title: "ONE OK ROCK Website",
      github: "https://github.com/t-riku/oneokrock_web",
      demo: "https://www.arttada.com/",
      category: "web",
    },
    {
      id: 6,
      image: Work6,
      title: "DHU Web（リメイク）",
      github: "https://github.com/t-riku/oneokrock_web",
      demo: "https://www.arttada.com/",
      category: "web",
    },
  ];

  const projectsNav = [
    {
      name: "all",
    },
    {
      name: "web",
    },
    {
      name: "app",
    },
    {
      name: "design",
    },
  ];

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

  const handleClick = (e, index) => {
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

      <div className={`container ${classes.work__container}`}>
        {projects.map((item) => {
          return <WorkItems item={item} key={item.id} />;
        })}
      </div>
    </div>
  );
};

export default Works;
