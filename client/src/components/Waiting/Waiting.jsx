import React from "react";
import Styles from "./Waiting.module.css";

const WaitingAnimation = () => {
  return (
    <div className={Styles.waitingContainer}>
      <div className={`${Styles.circle}`}></div>
      <div className={`${Styles.circle}`}></div>
      <div className={`${Styles.circle}`}></div>
    </div>
  );
};

export default WaitingAnimation;
