import React from "react";
import Link from "../../components/Link/Link";
import Styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={Styles.navbar}>
      <div className={`${Styles.container} container flex`}>
        <div>
          <h1 className={Styles.title}>Challenger's League</h1>
        </div>
        <div className={"flex"} style={{ gap: 25 }}>
          <Link path={"/Dashboard"} text={"Dashboard"} />
          <Link path={"/History"} text={"History"} />
          <Link path={"/TestArea"} text={"TeastArea"} />
          <Link path={"/Logout"} text={"Logout"} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
