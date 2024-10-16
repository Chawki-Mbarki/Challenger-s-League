import React from "react";
import challengeIcon from "../../images/challenge.svg";
import addIcon from "../../images/add.svg";
import blockIcon from "../../images/block.svg";
import unfriendIcon from "../../images/unfriend.svg";
import acceptIcon from "../../images/accept.svg";
import refuseIcon from "../../images/refuse.svg";
import messageIcon from "../../images/message.svg";
import Styles from "./MiniIcon.module.css";

const icons = {
  challenge: challengeIcon,
  add: addIcon,
  block: blockIcon,
  unfriend: unfriendIcon,
  accept: acceptIcon,
  refuse: refuseIcon,
  message: messageIcon,
};

const MiniIcon = ({ type, Clicked }) => {
  return (
    <div className={Styles.miniIconContainer} onClick={Clicked}> 
      <img src={icons[type]} alt={`${type} icon`} />
    </div>
  );
};

export default MiniIcon;