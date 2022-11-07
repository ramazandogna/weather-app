import React from "react";
import "./input.css";
import { FiSearch } from "react-icons/fi";

const input = () => {
  return (
    <form className="input">
      <input
        type={"text"}
        placeholder="Please enter location"
        className="input_value"
      />
      <span className="input_icon">
        <FiSearch />
      </span>
    </form>
  );
};

export default input;
