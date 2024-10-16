import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "../../components";
import Styles from "./Navbar.module.css";

const Navbar = () => {
  const navigate = useNavigate();
  
  const handleLogout = async () => {
    try {
      localStorage.removeItem("token");
      navigate("/");
    } catch (error) {
      console.error("Logout failed", error);
    }
  };

  return (
    <nav className={Styles.navbar}>
      <div className={`${Styles.container} container flex`}>
        <div className={"flex"} style={{ gap: 25 }}>
          <h1 className={Styles.title}>Challenger's League</h1>
          <Link path={"/TestArea"} text={"TestArea"} />
        </div>
        <div className={"flex"} style={{ gap: 25 }}>
          <Link path={"/Dashboard"} text={"Dashboard"} />
          <Link path={"/History"} text={"History"} />
          <Link path={"/"} text={"Logout"} WhenClicked={handleLogout} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
