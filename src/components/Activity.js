import React from "react";
import "./Activity.css";

const Activity = (props) => {
  return (
    <div className="Activity">
      <h1>{props.task.name}</h1>
      <span>
        {(props.task.time[2] + "0").slice(-2)}:
        {("0" + props.task.time[1]).slice(-2)}:
        {("0" + props.task.time[0]).slice(-2)}
      </span>
    </div>
  );
};

export default Activity;
