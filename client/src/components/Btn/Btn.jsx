import React from "react";
import Styles from "./Btn.module.css";

const Btn = ({ type, STYL, text, btnClick }) => {
  return (
    <button
      type={type}
      className={Styles[STYL]}
      onClick={() => {
        console.log("Button clicked:", text);
        btnClick();
      }}
    >
      {text}
    </button>
  );
};


export default Btn;
