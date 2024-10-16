import React from "react";
import { Waiting, PlayerCard } from "../../../../components";
import Styles from "./FriendsList.module.css";

const FriendList = ({ friends, onChallenge, onMessage, onUnfriend }) => {
  return (
    <div className={Styles.Column}>
      <h3>Friend</h3>
      { !friends ? (
        <div className="flex center">
          <p style={{ color: "white", fontSize: "27px" }}>Loading Friends</p>
          <Waiting />
        </div>
      ) : friends.length === 0 ? (
        <div className={Styles.no}>No Friend found</div>
      ) : (
        <ul>
          {friends.map((friend) => (
            <li key={friend._id}>
              <PlayerCard
                text={friend.username}
                isFriend={true}
                onChallenge={() => onChallenge(friend)}
                onMessage={() => onMessage(friend._id)}
                onUnfriend={() => onUnfriend(friend._id)}
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FriendList;
