import React, { useEffect, useState } from 'react';
import { ChampionIcon } from "../../components";
import { Navbar } from "../../Containers";
import Styles from './History.module.css';

const History = ({ userId }) => {
  const [matches, setMatches] = useState([]);
  const [error, setError] = useState(null);
  const [userName, setUserName] = useState(''); // Assuming you fetch this from the backend as well

  useEffect(() => {
    const fetchMatches = async () => {
      try {
        const response = await fetch(`/api/matches/history/${userId}`);
        if (!response.ok) {
          throw new Error('Failed to fetch matches');
        }
        const data = await response.json();
        setMatches(data);
        // Optionally set username if provided in the response
        // setUserName(data.userName); // Adjust based on your API response
      } catch (err) {
        setError(err.message);
      }
    };

    fetchMatches();
  }, [userId]);

  return (
    <div className={Styles.body}>
      <Navbar className={Styles.navbar} />
      <div className={`${Styles.container} ${Styles.historyContainer}`}>
        <div className={Styles.titleContainer}>
          <h1 className={Styles.pageTitle}>The {userName}'s History</h1>
        </div>

        {error && <div className={Styles.error}>{error}</div>}

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
                const isPlayer1 = match.player1 === userId;
                const opponent = isPlayer1 ? match.player2 : match.player1;
                const championIcon = isPlayer1 ? match.champion1DefaultIcon : match.champion2DefaultIcon;

                // Determine the class based on match result
                const rowClass = match.result === 'win' ? Styles.win : Styles.loss;

                return (
                  <tr key={index} className={rowClass}>
                    <td className={Styles.defaultIcon}>
                      <img src={championIcon} alt="Champion Icon" className={Styles.championIcon} />
                    </td>
                    <td>{opponent}</td>
                    <td className={Styles.defaultIcon}>
                      <img src={isPlayer1 ? match.champion2DefaultIcon : match.champion1DefaultIcon} alt="Opponent Champion Icon" className={Styles.championIcon} />
                    </td>
                    <td>{new Date(match.matchDate).toLocaleDateString()}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default History;
