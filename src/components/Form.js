import React from "react";
import "./Form.css";
import Tagdropdown from "./Tagdropdown";
import Timer from "./Timer";
import { useState } from "react";

const Form = () => {
  let [seconds, minutes, hours] = [0, 0, 0];
  const updateTime = () => {
    setInterval(() => {
      seconds += 1;
      if (seconds === 60) {
        seconds = 0;
        minutes += 1;
      }
      if (minutes === 60) {
        minutes = 0;
        hours += 1;
      }
      console.clear();
      setTime([hours, minutes, seconds]);
      console.log(hours, minutes, seconds);
    }, 1000);
  };
  const [isTimerActive, setIsTimerActive] = useState(false);
  const [time, setTime] = useState([0, 0, 0]);
  return (
    <div className="Form">
      <input placeholder="What are you working on?" className="Form__input" />
      <div className="Form__options">
        <button style={{ color: "#7E6E85" }} className="Form__icon">
          <i className="Button__icon fa-solid fa-folder-closed"></i>
        </button>
        <button style={{ color: "#7E6E85" }} className="Form__icon">
          <i class="Button__icon fa-solid fa-tag"></i>
        </button>
        <Timer time={time} />
        <div className="play-button-container">
          <button className="play-button" onClick={() => updateTime()}>
            <i
              style={{ color: "white" }}
              className="play-icon fa-solid fa-play"
            ></i>
          </button>
        </div>
      </div>
      <Tagdropdown />
    </div>
  );
};

export default Form;
