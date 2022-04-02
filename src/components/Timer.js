import React from "react";
import "./Timer.css";

const Timer = (props) => {
  return (
    <span>
      {props.time[0]}:{props.time[1]}:{props.time[2]}
    </span>
  );
};

export default Timer;
