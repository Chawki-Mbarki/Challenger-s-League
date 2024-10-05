import React from "react";
import MiniIcon from "../MiniIcon/MiniIcon";
import Styles from "./PlayerCard.module.css";

const PlayerCard = ({ isFriend, onChallenge, onAdd, onBlock, onMessage, onUnfriend }) => {
  return (
    <div className={Styles.card}>
      {isFriend ? (
        <>
          <h3>Friend Mini Card</h3>
          <div className={Styles.icons}>
            <MiniIcon type="challenge" onClick={onChallenge} />
            <MiniIcon type="message" onClick={onMessage} />
            <MiniIcon type="unfriend" onClick={onUnfriend} />
          </div>
        </>
      ) : (
        <>
          <h3>Player Mini Card</h3>
          <div className={Styles.icons}>
            <MiniIcon type="challenge" onClick={onChallenge} />
            <MiniIcon type="add" onClick={onAdd} />
            <MiniIcon type="block" onClick={onBlock} />
          </div>
        </>
      )}
    </div>
  );
};

export default PlayerCard;
