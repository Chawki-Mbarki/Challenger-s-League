import React from "react";
import MiniIcon from "../MiniIcon/MiniIcon";
import Styles from "./PlayerCard.module.css";

const PlayerCard = ({ text, isFriend, onChallenge, onAdd, onBlock, onMessage, onUnfriend }) => {
  return (
    <div className={Styles.card}>
      <h3>{text}</h3>
      <div className={Styles.icons}>
        <MiniIcon type="challenge" Clicked={onChallenge} />
        {isFriend ? (
          <>
            <MiniIcon type="message" Clicked={onMessage} />
            <MiniIcon type="unfriend" Clicked={onUnfriend} />
          </>
        ) : (
          <>
            <MiniIcon type="add" Clicked={onAdd} />
            <MiniIcon type="block" Clicked={onBlock} />
          </>
        )}
      </div>
    </div>
  );
};

export default PlayerCard;
