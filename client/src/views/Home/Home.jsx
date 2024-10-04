import React, { useState } from "react";
import { Btn, Paragraph } from "../../components";
import { LoginForm, RegisterForm } from "../../Containers";
import Styles from "./Home.module.css";

const Home = () => {
  const [formType, setFormType] = useState("");
  const [showForm, setShowForm] = useState(false);

  const handleButtonClick = (type) => {
    if (formType === type) return;

    setShowForm(false);
    setTimeout(() => {
      setFormType(type);
      setShowForm(true);
    }, 300);
  };

  const renderForm = () => {
    if (!showForm) return null;
    switch (formType) {
      case "login":
        return <LoginForm />;
      case "register":
        return <RegisterForm />;
      default:
        return null;
    }
  };

  return (
    <div className={Styles.container}>
      <div
        className={`${Styles.leftSection} ${
          showForm ? Styles.formVisible : ""
        }`}
      >
        {renderForm()}
      </div>
      <div className={Styles.rightSection}>
        <h1 className={Styles.title}>Challenger's League</h1>
        <div className={Styles.btnGroup}>
          <Btn
            type="button"
            STYL={formType === "login" ? "secondary" : "primary"}
            text="Sign In"
            onClick={() => handleButtonClick("login")}
          />
          <Btn
            type="button"
            STYL={formType === "register" ? "secondary" : "primary"}
            text="Sign Up"
            onClick={() => handleButtonClick("register")}
          />
        </div>
        <Paragraph text="Challenger League lets you challenge players in random or draft pick games, connect with new friends, and track your match history, win rate, and champion performance." />
      </div>
    </div>
  );
};

export default Home;
