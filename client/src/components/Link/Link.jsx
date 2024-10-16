import React from "react";
import { NavLink } from "react-router-dom";
import Styles from "./Link.module.css";

const Link = ({ path, text, WhenClicked }) => {
  return (
    <NavLink
      to={path}
      className={({ isActive }) =>`${Styles.link} ${isActive ? Styles.activeLink : ""}`}
      onClick={WhenClicked ? () => WhenClicked() : undefined}
    >
      {text} 
    </NavLink>
  );
};

export default Link;
