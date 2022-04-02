import React from "react";
import "./Timer.css";

const Timer = (props) => {
  return (
    <span>
      {(props.time[0] + "0").slice(-2)}:{("0" + props.time[1]).slice(-2)}:
      {("0" + props.time[2]).slice(-2)}
    </span>
  );
};

export default Timer;
