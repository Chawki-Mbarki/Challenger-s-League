import React from "react";
import { Waiting } from "../../../components";

const WaitingForResponse = ({ opponent, Styles }) => {
  if (!opponent) return <Waiting />;
  return (
    <div className={Styles.waitingContainer}>
      <h2 >
        Waiting for {opponent.username}'s Response<Waiting />
      </h2>
    </div>
  );
};

export default WaitingForResponse;
