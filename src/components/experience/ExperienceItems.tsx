import React from "react";
import classes from "src/components/experience/Experience.module.css";
import { BsPatchCheckFill } from "react-icons/bs";

export type ITEM = {
  id: number;
  title: string;
  category: string;
  // リテラル型で特定の文字しか入らなくなる
  level: "Basic" | "Advanced" | "Intermedeate";
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
