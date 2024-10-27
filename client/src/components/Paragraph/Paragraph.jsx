import React from "react";
import Styles from "./Paragraph.module.css";

const Paragraph = ({ text }) => {
  return (
    <div className={Styles.paragraphContainer}>
      <p className={Styles.paragraph}>{text}</p>
    </div>
  );
};

export default Paragraph;
