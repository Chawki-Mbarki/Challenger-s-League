import React from "react";
import { Btn, Waiting } from "../../../components";
import Styles from "../ChallengeWidget.module.css";

const ChallengeStart = ({ onGameModeChange, onStartBattle }) => {
  console.log("\n================\n");
  console.log("\n ChallengeStart \n");
  console.log("\n================\n");
  return (
    <div>
      <div className={Styles.modeSelector}>
        <div className="inputContainer flex center" style={{ gap: "12px" }}>
          <input
            type="radio"
            name="gameMode"
            value="Blind Pick"
            onChange={onGameModeChange}
          />
          <label>Blind Pick</label>
        </div>
        <div className="inputContainer flex center" style={{ gap: "12px" }}>
          <input
            type="radio"
            name="gameMode"
            value="Draft Pick"
            onChange={onGameModeChange}
          />
          <label>Draft Pick</label>
        </div>
      </div>
      <Btn text={"Start the Battle"} STYL="secondary" onClick={onStartBattle} />
    </div>
  );
};

export default ChallengeStart;
