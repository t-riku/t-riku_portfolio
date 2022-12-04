import React from "react";
import classes from "src/components/experience/Experience.module.css";
import { BsPatchCheckFill } from "react-icons/bs";

export type ITEM = {
  id: number;
  title: string;
  category: string;
  level: string;
};

const WorkItems = ({ item }: { item: ITEM }) => {
  return (
    <article className={classes.experience__details} key={item.id}>
      <BsPatchCheckFill className={classes.experience__details__icon} />
      <div>
        <h4>{item.title}</h4>
        <small>{item.level}</small>
      </div>
    </article>
  );
};

export default WorkItems;
