import React from "react";
import Styles from "./MessagingWdiget.module.css";
import { Btn, Flag, Input } from "../../components";

const MessagingWidget = ({ onClose, friend, messages }) => {
  console.log("friend: ", friend);
  return (
    <div className={`${Styles.overlay} flex column`}>
      <div className={Styles.widgetContainer}>
        <div className={Styles.info}>
          <Flag text={friend.username} type={"primary"} />
        </div>
        <div className={`${Styles.conversation} flex column center`}>
          <div className={Styles.messages}>
            <div className={Styles.messageContainer}>
              <p className={`${Styles.message} ${Styles.recieved}`}>Loresum</p>
            </div>
            <div className={Styles.messageContainer}>
              <p className={`${Styles.message} ${Styles.sent}`}>
                Lorem isit amet consectetur adipisicing elit.
              </p>
            </div>
            <div className={Styles.messageContainer}>
              <p className={`${Styles.message} ${Styles.recieved}`}>
                em ipsum dolor sit amet
              </p>
            </div>
            <div className={Styles.messageContainer}>
              <p className={`${Styles.message} ${Styles.recieved}`}>
                error ratione magnam exercitationem voluptas quibusdam eius
                porro, laboriosam saepe. Voluptatum iste incidunt cumque
                repellat nostrum ducimus.
              </p>
            </div>
            <div className={Styles.messageContainer}>
              <p className={`${Styles.message} ${Styles.sent}`}>
                exercitationem voluptas quibusdam eius porro, laboriosam saepe.
                Voluptatum iste incidunt cumque repellat nostrum ducimus.
              </p>
            </div>
            <div className={Styles.messageContainer}>
              <p className={`${Styles.message} ${Styles.sent}`}>
                exercitationem voluptas quibusdam eius porro, laboriosam saepe.
                Voluptatum iste incidunt cumque repellat nostrum ducimus.
              </p>
            </div>
            <div className={Styles.messageContainer}>
              <p className={`${Styles.message} ${Styles.recieved}`}>
                exercitationem voluptas quibusdam eius porro, laboriosam saepe.
                Voluptatum iste incidunt cumque repellat nostrum ducimus.
              </p>
            </div>
          </div>
        </div>
        <div className={`${Styles.inputContainer} flex center`}>
          <Input
            type="text"
            ID="message"
            placeholder="Click 'Enter' To Send"
          />
        </div>
        <div className={Styles.btnContainer}>
          <Btn type={"button"} STYL="white" text={"Close"} btnClick={onClose} />
        </div>
      </div>
    </div>
  );
};

export default MessagingWidget;
