import React from "react";
import { Btn, Input, Paragraph } from "../../components";
import Styles from './TestArea.module.css'

const TestArea = () => {
  return (
    <div className="flex column" style={{gap: 50 + "px", alignItems: 'center'}}>
      <div className="wrapper">
        <div className="btns">
          <h2>Buttons</h2>
          <Btn type={"button"} style={"primary"} text={"Start Project"} />
          <Btn type={"button"} style={"secondary"} text={"Start Project"} />
          <Btn type={"button"} style={"white"} text={"Start Project"} />
          <Btn type={"button"} style={"yes"} text={"Yes"} />
          <Btn type={"button"} style={"no"} text={"No"} />
          <Btn type={"button"} style={"pick"} text={"Pick"} />
        </div>
        <div className="Inputs">
          <h2>Inputs</h2>
          <Input type={"text"} ID={"username"} placeholder={"Enter your username"}  label={"Username:"} />
          <Input type={"password"} ID={"username"} placeholder={"Enter your Password"}  label={"Password:"} />
          <Input type={"email"} ID={"username"} placeholder={"Enter your Email"}  label={"Email:"} />
        </div>
        <div className="Paragraph">
          <h2>Paragraph</h2>
          <Paragraph text={'loremdsloremdsloremdsloremdsloremdsloremdsloremdsloremdsloremdsloremdsloremdsloremdsloremds'} />
        </div>
      </div>
    </div>
  );
};

export default TestArea;