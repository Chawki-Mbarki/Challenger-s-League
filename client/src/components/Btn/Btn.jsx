import React from "react";
import styles from "./Btn.module.css";

const Btn = ({ type, style, text, onClick }) => {
  return (
    <button type={type} className={styles[style]} onClick={onClick}>
      {text}
    </button>
  );
};

export default Btn;
