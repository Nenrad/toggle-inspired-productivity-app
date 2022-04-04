import React, { useEffect } from "react";
import "./Form.css";
import Tagdropdown from "./Tagdropdown";
import Timer from "./Timer";
import { useState, useRef } from "react";

const Form = (props) => {
  let timerInterval = useRef(0);
  const [taskInput, setTaskInput] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [isTimerActive, setIsTimerActive] = useState(false);
  const [time, setTime] = useState([0, 0, 0]);
  let seconds = useRef(0);
  let minutes = useRef(0);
  let hours = useRef(0);
  const handleUserInput = (e) => {
    setInputValue(e.target.value);
    setTaskInput(e.target.value);
  };
  const resetInputField = () => {
    if (isTimerActive) {
      setInputValue("");
    }
  };
  useEffect(() => {
    const updateTime = () => {
      seconds.current += 1;
      if (seconds.current === 60) {
        seconds.current = 0;
        minutes.current += 1;
      }
      if (minutes.current === 60) {
        minutes.current = 0;
        hours.current += 1;
      }
      setTime([hours.current, minutes.current, seconds.current]);
    };
    if (isTimerActive) {
      timerInterval.current = setInterval(updateTime, 1000);
    } else {
      console.log(taskInput);
      props.sendTaskToParent(taskInput, [
        seconds.current,
        minutes.current,
        hours.current,
      ]);
      setTaskInput("");
      [seconds.current, minutes.current, hours.current] = [0, 0, 0];
      setTime([hours.current, minutes.current, seconds.current]);
      clearInterval(timerInterval.current);
    }
    // eslint-disable-next-line
  }, [isTimerActive]);
  return (
    <div className="Form">
      <input
        placeholder="What are you working on?"
        className="Form__input"
        onChange={handleUserInput}
        value={inputValue}
      />
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
              resetInputField();
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
