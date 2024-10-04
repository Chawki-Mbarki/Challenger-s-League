import React from "react";
import {
  ProgressCircle,
  Btn,
  Input,
  Paragraph,
  Flag,
  Waiting,
} from "../../components";
import { Navbar } from "../../Containers";
import Styles from "./TestArea.module.css";

const TestArea = () => {
  return (
    <div
      className="flex column"
      style={{ gap: 50 + "px", alignItems: "center" }}
    >
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
            ID={"username"}
            placeholder={"Enter your Password"}
            label={"Password:"}
          />
          <Input
            type={"email"}
            ID={"username"}
            placeholder={"Enter your Email"}
            label={"Email:"}
          />
        </div>
        <div className="Paragraph container">
          <h2>Paragraph</h2>
          <Paragraph
            text={
              "loremdsloremdsloremdsloremdsloremdsloremdsloremdsloremdsloremdsloremdsloremdsloremdsloremds"
            }
          />
        </div>
        <div className="container">
          <h2>Navigation Bar</h2>
          <Navbar />
        </div>
        <div className="container">
          <h2>Progress Circle</h2>
          <div className="flex center" style={{ gap: 25 }}>
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
      </div>
    </div>
  );
};

export default TestArea;
