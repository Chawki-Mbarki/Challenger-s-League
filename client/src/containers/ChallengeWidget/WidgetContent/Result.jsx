import React from "react";
import { Btn, ChampionIcon, Waiting } from "../../../components";
import defaultIcon from "../../../images/ChampionDefault.png";
import { useNavigate } from "react-router-dom";

const Result = ({
  challenge,
  myRole,
  selectedChampion,
  otherChampion,
  version,
  handleResult,
}) => {
  const navigate = useNavigate();

  if (
    !challenge ||
    !myRole ||
    !selectedChampion ||
    !otherChampion ||
    !version ||
    !handleResult
  )
    return <Waiting />;

  return (
    <div>
      <div style={{ display: "flex", gap: "70px" }}>
        {myRole === "challenger" ? (
          <>
            <div className="flex column center" style={{ width: "50%" }}>
              <ChampionIcon
                imageURL={
                  selectedChampion
                    ? `https://ddragon.leagueoflegends.com/cdn/${version}/img/champion/${selectedChampion.image.full}`
                    : defaultIcon
                }
                isSelected={
                  challenge.challengerChamp
                    ? challenge.challengerChamp.confirmed
                    : false
                }
              />
              <p
                className="flex center"
                style={{ textAlign: "center", height: "70px" }}
              >
                {selectedChampion ? selectedChampion.id : "Select A Champion"}
              </p>
            </div>
            <div className="flex column center" style={{ width: "50%" }}>
              <ChampionIcon
                imageURL={
                  otherChampion
                    ? `https://ddragon.leagueoflegends.com/cdn/${version}/img/champion/${otherChampion.image.full}`
                    : defaultIcon
                }
                isSelected={
                  challenge.opponentChamp
                    ? challenge.opponentChamp.confirmed
                    : false
                }
              />
              <p
                className="flex center"
                style={{ textAlign: "center", height: "70px" }}
              >
                {otherChampion ? otherChampion.id : <Waiting />}
              </p>
            </div>
          </>
        ) : (
          <>
            <div className="flex column center" style={{ width: "50%" }}>
              <ChampionIcon
                imageURL={
                  selectedChampion
                    ? `https://ddragon.leagueoflegends.com/cdn/${version}/img/champion/${selectedChampion.image.full}`
                    : defaultIcon
                }
                isSelected={
                  challenge.opponentChamp
                    ? challenge.opponentChamp.confirmed
                    : false
                }
              />
              <p
                className="flex center"
                style={{ textAlign: "center", height: "70px" }}
              >
                {selectedChampion ? selectedChampion.id : "Select A Champion"}
              </p>
            </div>
            <div className="flex column center" style={{ width: "50%" }}>
              <ChampionIcon
                imageURL={
                  otherChampion
                    ? `https://ddragon.leagueoflegends.com/cdn/${version}/img/champion/${otherChampion.image.full}`
                    : defaultIcon
                }
                isSelected={
                  challenge.challengerChamp
                    ? challenge.challengerChamp.confirmed
                    : false
                }
              />
              <p
                className="flex center"
                style={{ textAlign: "center", height: "70px" }}
              >
                {otherChampion ? otherChampion.id : <Waiting />}
              </p>
            </div>
          </>
        )}
      </div>
      <div>
        <p>Did you win the game?</p>
        <Btn btnClick={() => handleResult("won", challenge, myRole, navigate)} text={"Yes"} STYL={"yes"} />
        <Btn btnClick={() => handleResult("lost", challenge, myRole, navigate)} text={"No"} STYL={"no"} />
      </div>
    </div>
  );
};

export default Result;
