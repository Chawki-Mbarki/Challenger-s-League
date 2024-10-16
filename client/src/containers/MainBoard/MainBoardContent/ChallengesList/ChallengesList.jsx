import React from "react";
import { Waiting, MatchCard } from "../../../../components";
import Styles from "./ChallengesList.module.css";

const ChallengesList = ({ challenges, onAccept, onRefuse }) => {
  return (
    <div className={Styles.Column}>
      <h3>Challenges</h3>
      { !challenges ? (
        <div className="flex center">
          <p style={{ color: "white", fontSize: "27px" }}>Loading Challenges</p>
          <Waiting />
        </div>
      ) : challenges.length === 0 ? (
        <div className={Styles.no}>No One Dares to challenge you</div>
      ) : (
        <ul>
          {challenges
            .filter((challenge) => challenge.status === "pending")
            .map((challenge) => (
              <li key={challenge._id}>
                <MatchCard
                  text={challenge.challenger.username}
                  onAccept={() => onAccept(challenge)}
                  onRefuse={() => onRefuse(challenge)}
                />
              </li>
            ))}
        </ul>
      )}
    </div>
  );
};

export default ChallengesList;
