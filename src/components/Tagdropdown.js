import React from "react";
import "./Tagdropdown.css";
import { useState } from "react";

const Tagdropdown = () => {
  const [options, setOptions] = useState([]);
  const [input, setInput] = useState("");
  return (
    <div className="Tagdropdown">
      <div className="Tagdropdown__search-container">
        <i className="fa-solid fa-sm fa-magnifying-glass"></i>
        <input
          placeholder="Add/filter tags"
          className="Tagdropdown__search"
          onChange={(e) => {
            setInput(e.target.value);
          }}
        ></input>
      </div>
      {options.map((option) => {
        return (
          <div className="search__option">
            <input type="checkbox"></input>
            <label>{option}</label>
          </div>
        );
      })}
      <hr className="divider"></hr>
      <div className="Tagdropdown__button-container">
        <button
          className="Tagdropdown__button"
          onClick={() => {
            setOptions([...options, input]);
          }}
        >
          <i className="fa-solid fa-plus"></i>Create Tag "{input}"
        </button>
      </div>
    </div>
  );
};

export default Tagdropdown;
