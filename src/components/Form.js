import React from "react";
import "./Form.css";
import Tagdropdown from "./Tagdropdown";

const Form = () => {
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
        <div className="play-button-container">
          <button className="play-button">
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
