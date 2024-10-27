import React from "react";
import { Waiting } from "../../../components";

const WaitingForOtherPlayerToPick = ({ otherPlayer, Styles }) => {
  if (!otherPlayer) return <Waiting />;
  return (
    <div className={Styles.waitingContainer} style={{margin: "50px 0"}}>
      <h2 >
        Waiting for {otherPlayer.username} to Pick a champion<Waiting />
      </h2>
    </div>
  );
};

export default WaitingForOtherPlayerToPick;
