import React, { useState } from "react";
import {
  ProgressCircle,
  Btn,
  Input,
  Paragraph,
  Flag,
  Waiting,
  ChampionIcon,
  MiniIcon
} from "../../components";
import { Navbar } from "../../Containers";
import Styles from "./TestArea.module.css";
import ChampionDefault from "../../images/ChampionDefault.png";
import bg from "../../images/bg.jpeg";

const TestArea = () => {
  const [selectedIcon, setSelectedIcon] = useState(null);

  const handleSelectIcon = (imageURL) => {
    setSelectedIcon(imageURL);
  };

  return (
    <div className="flex column" style={{ gap: "50px", alignItems: "center" }}>
      <div className={`${Styles.wrapper} flex column center`}>
        <div className="btns container">
          <h2>Buttons</h2>
          <Btn type={"button"} STYL={"primary"} text={"Start Project"} />
          <Btn type={"button"} STYL={"secondary"} text={"Start Project"} />
          <Btn type={"button"} STYL={"white"} text={"Start Project"} />
          <Btn type={"button"} STYL={"yes"} text={"Yes"} />
          <Btn type={"button"} STYL={"no"} text={"No"} />
          <Btn type={"button"} STYL={"pick"} text={"Pick"} />
        </div>
        <div className="Inputs container">
          <h2>Inputs</h2>
          <Input
            type={"text"}
            ID={"username"}
            placeholder={"Enter your username"}
            label={"Username:"}
          />
          <Input
            type={"password"}
            ID={"password"}
            placeholder={"Enter your Password"}
            label={"Password:"}
          />
          <Input
            type={"email"}
            ID={"email"}
            placeholder={"Enter your Email"}
            label={"Email:"}
          />
        </div>
        <div className="Paragraph container">
          <h2>Paragraph</h2>
          <Paragraph
            text={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vehicula nisl nec efficitur dignissim."
            }
          />
        </div>
        <div className="container">
          <h2>Navigation Bar</h2>
          <Navbar />
        </div>
        <div className="container">
          <h2>Progress Circle</h2>
          <div className="flex center" style={{ gap: "25px" }}>
            <ProgressCircle progress={10} text="TEST" />
            <ProgressCircle progress={25} text="Win rate" />
            <ProgressCircle progress={50} text="Champions" />
            <ProgressCircle progress={75} text="XP" />
            <ProgressCircle progress={95} text="TEST" />
          </div>
        </div>
        <div className="container">
          <h2>Flags</h2>
          <Flag text="Ahmed" type="primary" />
          <Flag text="Black Flag" type="black" />
          <Flag text="Error Flag" type="error" />
        </div>
        <div className="container">
          <h2>Waiting Animation</h2>
          <Waiting />
        </div>
        <div className="container">
          <h2>Champion Icon</h2>
          <div className="flex" style={{ gap: "20px" }}>
            <ChampionIcon
              imageURL={ChampionDefault}
              isSelected={selectedIcon === ChampionDefault}
              onSelect={() => handleSelectIcon(ChampionDefault)}
            />
            <ChampionIcon
              imageURL={bg}
              isSelected={selectedIcon === bg}
              onSelect={() => handleSelectIcon(bg)}
            />
          </div>
        </div>
        <div className="container">
          <h2>Mini Icons</h2>
          <div className="flex" style={{ gap: "20px" }}>
            <MiniIcon type="challenge" onClick={() => alert("Challenge icon clicked!")}/>
            <MiniIcon type="add" onClick={() => alert("Add icon clicked!")} />
            <MiniIcon type="block" onClick={() => alert("Block icon clicked!")} />
            <MiniIcon type="message" onClick={() => alert("Message icon clicked!")} />
            <MiniIcon type="unfriend" onClick={() => alert("Unfriend icon clicked!")} />
            <MiniIcon type="accept" onClick={() => alert("Accept icon clicked!")} />
            <MiniIcon type="refuse" onClick={() => alert("Refuse icon clicked!")} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestArea;
