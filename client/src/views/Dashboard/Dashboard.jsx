import React, { useEffect, useState } from "react";
import { Navbar, Stats, MainBoard } from "../../containers";
import { getUser } from "../../api/userApi";
import Styles from "./Dashboard.module.css";
import { Flag, Waiting } from "../../components";

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userResponse = await getUser();
        setUser(userResponse.user);
      } catch (error) {
        console.error("Error loading data:", error);
        setError(error?.response?.data?.error || "Failed to load data.");
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <Navbar />
      <div className={`${Styles.container} flex column`}>
        {error ? (
          <div style={{marginTop: "25px"}}>
            <Flag type={"error"} text={error} />
          </div>
        ) : !user ? (
          <div className="flex center">
            <p style={{ color: "white", fontSize: "27px" }}>Loading Your Data</p><Waiting />
          </div>
        ) : (
          <>
            <Stats user={user} />
            <MainBoard user={user} />
          </>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
