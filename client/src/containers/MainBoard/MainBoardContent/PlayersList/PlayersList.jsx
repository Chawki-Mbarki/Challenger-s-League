import React from "react";
import { Waiting, PlayerCard } from "../../../../components";
import Styles from "./PlayersList.module.css";

const PlayersList = ({ players, onChallenge, onAddFriend, onBlock }) => {
  return (
    <div className={Styles.Column}>
      <h3>Players</h3>
      { !players ? (
        <div className="flex center">
          <p style={{ color: "white", fontSize: "27px" }}>Loading Players</p>
          <Waiting />
        </div>
      ) : players.length === 0 ? (
        <div className={Styles.no}>No Players found</div>
      ) : (
        <ul>
          {players.map((player) => (
            <li key={player._id}>
              <PlayerCard
                text={player.username}
                isFriend={false}
                onChallenge={() => {
                  onChallenge(player);
                }}
                onAdd={() => onAddFriend(player._id)}
                onBlock={() => onBlock(player._id)}
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PlayersList;
