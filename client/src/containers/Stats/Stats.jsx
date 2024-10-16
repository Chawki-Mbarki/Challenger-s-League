import React, { useEffect, useState } from "react";
import { Waiting, ProgressCircle, Flag } from "../../components";
import { getMatchHistory } from "../../api/matchApi";
import Styles from "./Stats.module.css";

const Stats = ({ user }) => {
  const [winrate, setWinrate] = useState(0);
  const [level, setLevel] = useState(1);
  const [xp, setXp] = useState(0);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const matchHistoryResponse = await getMatchHistory();
        setWinrate(matchHistoryResponse.winRate);

        let totalXp = 0;
        let totalLevel = 0;

        matchHistoryResponse.matches.forEach((match) => {
          if (match.result === "won") {
            totalXp += 50;
          } else if (match.result === "lost") {
            totalXp -= 25;
          }
        });
        while (totalXp >= 100) {
          totalXp -= 100;
          totalLevel += 1;
        }

        setXp(totalXp);
        setLevel(totalLevel);
      } catch (error) {
        console.error("Error loading data:", error);
        setError(error.response?.data?.error || "Failed to load data.");
      }
    };
    fetchData();
  }, []);

  if (error) {
    return (
      <div style={{ marginTop: "25px" }}>
        <Flag type={"error"} text={error} />
      </div>
    );
  }

  if (!user) {
    return (
      <div className="flex center">
        <p style={{ color: "white", fontSize: "27px" }}>Loading Stats</p>
        <Waiting />
      </div>
    );
  }

  return (
    <div className={`${Styles.Stats} flex column container`}>
      <ProgressCircle
        progress={winrate}
        text="Win rate"
        progressText={`${winrate}%`}
      />
      <div
        className={`${Styles.greetingContainer} flex`}
        style={{ gap: "2vw" }}
      >
        <ProgressCircle
          progress={level}
          text="Level"
          progressText={`${level}`}
        />
        <div className={`${Styles.userInfo} flex column center`}>
          <h3>
            Greetings, Summoner <span>{user.username}</span>
          </h3>
          <h4>Welcome to the Challenger's League</h4>
        </div>
        <ProgressCircle progress={xp} text="XP" progressText={`${xp}`} />
      </div>
    </div>
  );
};

export default Stats;
