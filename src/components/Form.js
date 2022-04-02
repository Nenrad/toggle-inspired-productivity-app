import React, { useEffect } from "react";
import "./Form.css";
import Tagdropdown from "./Tagdropdown";
import Timer from "./Timer";
import { useState, useRef } from "react";

const Form = () => {
  let timerInterval = useRef(0);
  const [isTimerActive, setIsTimerActive] = useState(false);
  const [time, setTime] = useState([0, 0, 0]);
  useEffect(() => {
    let [seconds, minutes, hours] = [0, 0, 0];
    const updateTime = () => {
      seconds += 1;
      if (seconds === 60) {
        seconds = 0;
        minutes += 1;
      }
      if (minutes === 60) {
        minutes = 0;
        hours += 1;
      }
      setTime([hours, minutes, seconds]);
    };
    if (isTimerActive) {
      timerInterval.current = setInterval(updateTime, 1000);
    } else {
      [seconds, minutes, hours] = [0, 0, 0];
      setTime([hours, minutes, seconds]);
      clearInterval(timerInterval.current);
    }
  }, [isTimerActive]);
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
          <button
            className="play-button"
            onClick={() => {
              setIsTimerActive(!isTimerActive);
            }}
          >
            <i
              style={{ color: "white" }}
              className={
                isTimerActive ? "fa-solid fa-stop" : "fa-solid fa-play"
              }
            ></i>
          </button>
        </div>
      </div>
      <Tagdropdown />
    </div>
  );
};

export default Form;
