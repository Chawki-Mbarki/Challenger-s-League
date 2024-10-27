import React, { useEffect, useState } from "react";
import { ChampionIcon, Flag, Waiting } from "../../components";
import { Navbar } from "../../containers";
import Styles from "./History.module.css";
import { getMatchHistory } from "../../api/matchApi";
import { getUser } from "../../api/userApi";
import axios from "axios";

const History = () => {
  const [matches, setMatches] = useState([]);
  const [user, setUser] = useState([]);
  const [error, setError] = useState(null);
  const [version, setVersion] = useState(null);

  const getLatestVersion = async () => {
    const response = await axios.get("https://ddragon.leagueoflegends.com/api/versions.json");
    setVersion(response.data[0]);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userResponse = await getUser();
        setUser(userResponse.user);
        setVersion(getLatestVersion());
      } catch (error) {
        console.error("Error loading data:", error);
        setError(error?.response?.data?.error || "Failed to load data.");
      }
    };

    fetchData();
  }, []);


  useEffect(() => {
    const fetchMatches = async () => {
      try {
        const matchHistoryResponse = await getMatchHistory();
        setMatches(matchHistoryResponse.matches);
      } catch (error) {
        console.error("Error Loading Matches:", error);
        setError(error.response?.data?.error || "Failed To Load Data.");
      }
    };

    fetchMatches();
  }, [user]);

  return (
    <div>
      <Navbar />
      <div className={`${Styles.container} flex column`}>
        {error ? (
          <div style={{ marginTop: "25px" }}>
            <Flag type={"error"} text={error} />
          </div>
        ) : (!user, !matches, !version) ? (
          <div className="flex center">
            <p style={{ color: "white", fontSize: "27px" }}>
              Loading Your Data
            </p>
            <Waiting />
          </div>
        ) : (
          <div className="container">
            <div className={Styles.titleContainer}>
              <h1 className={Styles.pageTitle}>
                {user.username}'s Match History
              </h1>
            </div>
            <div className={Styles.historyTableContainer}>
              <table className={Styles.historyTable}>
                <thead>
                  <tr>
                    <th className={Styles.defaultIcon}></th>
                    <th>Opponent</th>
                    <th className={Styles.defaultIcon}></th>
                    <th>Date</th>
                  </tr>
                </thead>
                <tbody>
                  {matches.map((match, index) => {
                    console.log(match);
                    const isChallenger = match.challenger._id === user._id;
                    const rowClass = match.result === "won" ? Styles.won : Styles.lost;
                    return (
                      <tr key={index} className={rowClass}>
                        <td className={Styles.defaultIcon}>
                          <ChampionIcon
                            imageURL={`https://ddragon.leagueoflegends.com/cdn/${version}/img/champion/${match.challengerChamp.image.full}`}
                            isSelected={isChallenger}
                          />
                        </td>
                        <td>{
                          isChallenger? (
                            match.opponent.username
                          ) : (
                            match.challenger.username
                          )
                          }</td>
                        <td className={Styles.defaultIcon}>
                          <ChampionIcon
                            imageURL={`https://ddragon.leagueoflegends.com/cdn/${version}/img/champion/${match.opponentChamp.image.full}`}
                            isSelected={!isChallenger}
                          />
                        </td>
                        <td>
                          {new Date(match.matchDate).toLocaleDateString()}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default History;
