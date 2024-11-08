import React from "react";
import Styles from "./MessagingWdiget.module.css";
import { Btn, Flag } from "../../components";

const MessagingWidget = ({
  onClose,
  friend,
  messages
}) => {
  console.log("friend: ",friend)
  return (
    <div className={`${Styles.overlay} flex column`}>
      <div className={Styles.widgetContainer}>
        <div className={Styles.info}>
          <h2>
            <Flag text={friend.username} type={"primary"} />
          </h2>
        </div>
        <div><h1>test</h1></div>
        <Btn type={"button"} STYL="white" text={"Close"} btnClick={onClose} />
      </div>
    </div>
  );
};

export default MessagingWidget;
