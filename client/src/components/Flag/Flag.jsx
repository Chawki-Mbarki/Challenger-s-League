import React from "react";
import Styles from "./Flag.module.css";

const Flag = ({ text, type }) => {
  return <p className={`${Styles.flag} ${Styles[type]}`}>{text}</p>;
};

export default Flag;
