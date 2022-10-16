import React from "react";
import classes from "./ProjectItem.module.css";

const ProjectItem = (props) => {
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className={classes.card} onClick={() => openInNewTab(`${props.link}`)}>
      <img src={props.photo} />
      <p className={classes.header}>{props.name}</p>
      <button
        onClick={() => openInNewTab(`${props.gitlink}`)}
        className={classes.btn}
      >
        Code
      </button>
    </div>
  );
};

export default ProjectItem;
