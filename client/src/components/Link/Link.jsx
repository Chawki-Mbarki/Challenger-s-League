import React from "react";
import { NavLink } from "react-router-dom";
import Styles from "./Link.module.css";

const Link = ({ path, text, OnClick }) => {
  return (
    <NavLink
      to={path}
      exact
      className={({ isActive }) =>
        `${Styles.link} ${isActive ? Styles.activeLink : ""}`
      }
      onClick={() => OnClick()}
    >
      {text}
    </NavLink>
  );
};

export default Link;
