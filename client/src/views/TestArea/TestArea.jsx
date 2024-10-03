import React from "react";
import { ProgressCircle, Btn, Input, Paragraph, Flag, Waiting} from "../../components";
import { Navbar } from "../../Containers";
import Styles from './TestArea.module.css'

const TestArea = () => {
  return (
    <div className="flex column" style={{ gap: 50 + "px", alignItems: 'center' }}>
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
          <Input type={"text"} ID={"username"} placeholder={"Enter your username"} label={"Username:"} />
          <Input type={"password"} ID={"username"} placeholder={"Enter your Password"} label={"Password:"} />
          <Input type={"email"} ID={"username"} placeholder={"Enter your Email"} label={"Email:"} />
        </div>
        <div className="Paragraph">
          <h2>Paragraph</h2>
          <Paragraph text={'loremdsloremdsloremdsloremdsloremdsloremdsloremdsloremdsloremdsloremdsloremdsloremdsloremds'} />
        </div>
        <div >
          <h2>Navigation Bar</h2>
          <Navbar />
        </div>
        <div >
          <h2>Progress Circle</h2>
          <ProgressCircle progress={70} text="Progress" />
        </div>
        <div>
          <h2>Flags</h2>
          <Flag text="Primary Flag" type="primary" />
          <Flag text="vs" type="black" />
          <Flag text="Ahmed" type="primary" />
          <Flag text="test" type="black" />
        </div>
        <div>
          <h2>Waiting Animation</h2>
          <Waiting />
        </div>
        <div>
          test
        </div>

      </div>
    </div>
  );
};

export default TestArea;
