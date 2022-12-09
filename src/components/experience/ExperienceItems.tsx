import React from "react";
import classes from "src/components/experience/Experience.module.css";
import { BsPatchCheckFill } from "react-icons/bs";

export type ITEM = {
  id: number;
  title: string;
  category: string;
  level: string;
  // level: Basic/Advanced/Intermediate;
  // level = "Basic" | "Advanced" | "Intermedeate"
};

const WorkItems = ({ item }: { item: ITEM }) => {
  return (
    <article className={classes.experience__details} key={item.id}>
      <BsPatchCheckFill
        className={
          item.level === "Basic"
            ? classes.experience__details__icon__basic
            : item.level === "Intermedeate"
            ? classes.experience__details__icon__intermedeate
            : item.level === "Advanced"
            ? classes.experience__details__icon__advanced
            : ""
        }
      />
      {/* levelの熟練度によってiconの色を変えたい。三項演算子（if文）でclassを付け替え、
      色をかえる。{level==="Advance" ? {classes.activeBlue}:""}みたいな */}
      <div>
        <h4>
          {item.title} <span> / {item.category} </span>
        </h4>
        <small>{item.level}</small>
      </div>
    </article>
  );
};

export default WorkItems;
