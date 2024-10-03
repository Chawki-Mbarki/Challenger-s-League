import React from 'react';
import { NavLink } from 'react-router-dom';
import Styles from './Link.module.css';

const Link = () => {
  return (
    <div className={Styles.links}>
      <NavLink
        to="/history"
        className={({ isActive }) => isActive ? Styles.activeLink : Styles.link}
      >
        History
      </NavLink>
      <NavLink
        to="/dashboard"
        className={({ isActive }) => isActive ? Styles.activeLink : Styles.link}
      >
        Dashboard
      </NavLink>

    </div>
  );
};

export default Link;
