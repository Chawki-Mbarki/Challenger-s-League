import React from "react";
import MiniIcon from "../MiniIcon/MiniIcon";
import Styles from "./MatchCard.module.css";

const MatchMiniCard = ({ onAccept, onRefuse, text }) => {
  return (
    <div className={Styles.card}>
      <h1>{text}</h1>
      <div className={Styles.icons}>
        <MiniIcon type="accept" Clicked={onAccept} />
        <MiniIcon type="refuse" Clicked={onRefuse} />
      </div>

    </div>
  );
};

export default MatchMiniCard;
