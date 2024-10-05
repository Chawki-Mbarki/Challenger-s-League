import React from "react";
import MiniIcon from "../MiniIcon/MiniIcon";
import Styles from "./MatchCard.module.css";

const MatchMiniCard = ({ onAccept, onRefuse }) => {
  return (
    <div className={Styles.card}>
      <h1>Challenge Mini Card</h1>
      <div className={Styles.icons}>
        <MiniIcon type="accept" onClick={onAccept} />
        <MiniIcon type="refuse" onClick={onRefuse} />
      </div>

    </div>
  );
};

export default MatchMiniCard;
