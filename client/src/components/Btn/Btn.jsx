import React from "react";
import Styles from "./Btn.module.css";

const Btn = ({ type, STYL, text, onClick }) => {
  return (
    <button
      type={type}
      className={Styles[STYL]}
      onClick={() => {
        console.log("Button clicked:", text);
        onClick();
      }}
    >
      {text}
    </button>
  );
};


export default Btn;
